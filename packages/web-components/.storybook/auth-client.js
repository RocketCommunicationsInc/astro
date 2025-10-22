import { createAuth0Client } from '@auth0/auth0-spa-js'

class Auth0Manager {
    constructor() {
        this.auth0 = null
        this.user = null
        this.isAuthenticated = false
        this.isInitialized = false
        this.clientId = null
        this.domain = null
        this.confirmed = false
        this.listeners = new Set()
    }

    async init() {
        if (this.isInitialized) return

        try {
            const domain =
                document.querySelector('meta[name="auth0-domain"]')?.content ||
                process.env.STORYBOOK_AUTH0_DOMAIN ||
                'your-domain.auth0.com'
            const clientId =
                document.querySelector('meta[name="auth0-client-id"]')
                    ?.content ||
                process.env.STORYBOOK_AUTH0_CLIENT_ID ||
                'your-client-id'
            this.clientId = clientId
            this.domain = domain

            this.auth0 = await createAuth0Client({
                domain,
                clientId,
                authorizationParams: {
                    redirect_uri: window.location.origin,
                    audience: `https://${domain}/api/v2/`,
                },
                cacheLocation: 'localstorage',
                useRefreshTokens: true,
            })

            this.isAuthenticated = await this.auth0.isAuthenticated()

            if (this.isAuthenticated) {
                this.user = await this.auth0.getUser()
            }

            // Try to read ID token claims; only mark "confirmed" when we have a valid id token
            try {
                const claims = await this.auth0.getIdTokenClaims()
                if (claims && claims.exp && typeof claims.exp === 'number') {
                    this.confirmed = claims.exp * 1000 > Date.now()
                } else {
                    this.confirmed = !!claims
                }
            } catch (e) {
                this.confirmed = false
            }

            this.isInitialized = true
            this.notifyListeners()
            this.updateUI()
        } catch (err) {
            // Keep console error to help debugging in Storybook
            // but don't throw so Storybook still renders
            // eslint-disable-next-line no-console
            console.error('Storybook Auth0 init error:', err)
        }
    }

    async login() {
        if (!this.auth0) await this.init()

        try {
            await this.auth0.loginWithPopup()
            this.isAuthenticated = await this.auth0.isAuthenticated()
            if (this.isAuthenticated) this.user = await this.auth0.getUser()

            // After popup, attempt to read ID token claims to mark confirmed
            try {
                const claims = await this.auth0.getIdTokenClaims()
                if (claims && claims.exp && typeof claims.exp === 'number') {
                    this.confirmed = claims.exp * 1000 > Date.now()
                } else {
                    this.confirmed = !!claims
                }
            } catch (e) {
                this.confirmed = false
            }

            this.notifyListeners()
            this.updateUI()
        } catch (error) {
            if (error?.error === 'cancelled') {
                // user cancelled popup
            } else {
                // eslint-disable-next-line no-console
                console.error('Storybook Auth0 login error:', error)
            }
        }
    }

    async logout(options = {}) {
        if (!this.auth0) return
        try {
            // Default to federated logout (clear IdP SSO) unless explicitly disabled
            const doFederated = options.federated !== false
            const logoutParams = {
                returnTo: options.returnTo || window.location.origin,
            }
            if (doFederated) logoutParams.federated = true

            // Clear client-side cache/state first so UI doesn't think we're still logged in
            try {
                const ls = window && window.localStorage
                if (ls) {
                    const keys = Object.keys(ls)
                    keys.forEach((k) => {
                        if (!k) return
                        const lower = k.toLowerCase()
                        if (
                            lower.includes('auth0') ||
                            lower.includes('spajs') ||
                            lower.includes('@@auth0spajs@@') ||
                            (this.clientId && k.includes(this.clientId))
                        ) {
                            try {
                                ls.removeItem(k)
                            } catch (e) {
                                /* ignore */
                            }
                        }
                    })
                }
            } catch (cleanupErr) {
                // ignore localStorage cleanup failures
            }

            // Clear internal state and notify UI immediately
            this.isAuthenticated = false
            this.user = null
            this.confirmed = false
            this.notifyListeners()
            this.updateUI()

            // For federated logout, navigate the top-level window to Auth0's logout endpoint
            if (doFederated && this.domain && this.clientId) {
                try {
                    const returnTo = logoutParams.returnTo
                    const logoutUrl = `https://${
                        this.domain
                    }/v2/logout?client_id=${encodeURIComponent(
                        this.clientId
                    )}&returnTo=${encodeURIComponent(returnTo)}`
                    // Try to navigate the top window (prevents nested storybook inside iframe)
                    if (window.top && window.top !== window) {
                        window.top.location.href = logoutUrl
                        return
                    }
                } catch (navErr) {
                    // fallback to SDK logout below
                }
            }

            // Fallback: call SDK logout which will redirect inside the current context
            await this.auth0.logout({ logoutParams })
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error('Storybook Auth0 logout error:', err)
        }
    }

    async getUser() {
        if (!this.isAuthenticated) return null
        return this.user
    }

    isLoggedIn() {
        return this.isAuthenticated
    }

    subscribe(cb) {
        this.listeners.add(cb)
        return () => this.listeners.delete(cb)
    }

    notifyListeners() {
        this.listeners.forEach((cb) =>
            cb({
                isAuthenticated: this.isAuthenticated,
                user: this.user,
                isInitialized: this.isInitialized,
                confirmed: this.confirmed,
            })
        )
        try {
            // Inform the Storybook manager (parent window) about auth state so it can lock UI
            if (window.parent && window.parent !== window) {
                window.parent.postMessage(
                    {
                        type: 'storybook-auth',
                        payload: {
                            isAuthenticated: this.isAuthenticated,
                            confirmed: this.confirmed,
                        },
                    },
                    '*'
                )
            }
        } catch (e) {
            // ignore
        }
    }

    updateUI() {
        const loginButtons = document.querySelectorAll('[data-auth-login]')
        const logoutButtons = document.querySelectorAll('[data-auth-logout]')
        const userInfo = document.querySelectorAll('[data-auth-user]')
        const protectedContent = document.querySelectorAll(
            '[data-auth-protected]'
        )
        const loginPrompts = document.querySelectorAll(
            '[data-auth-login-prompt]'
        )

        loginButtons.forEach((btn) => {
            btn.style.display = this.isAuthenticated ? 'none' : 'block'
            if (!this.isAuthenticated)
                btn.addEventListener('click', () => this.login())
        })

        logoutButtons.forEach((btn) => {
            btn.style.display = this.isAuthenticated ? 'block' : 'none'
            if (this.isAuthenticated)
                btn.addEventListener('click', () => this.logout())
        })

        userInfo.forEach((el) => {
            if (this.isAuthenticated && this.user) {
                el.textContent = this.user.name || this.user.email || 'User'
                el.style.display = 'block'
            } else {
                el.style.display = 'none'
            }
        })

        protectedContent.forEach((el) => {
            el.style.display = this.isAuthenticated ? 'block' : 'none'
        })

        loginPrompts.forEach((el) => {
            el.style.display = this.isAuthenticated ? 'none' : 'block'
        })

        window.dispatchEvent(
            new CustomEvent('authStateChanged', {
                detail: {
                    isAuthenticated: this.isAuthenticated,
                    user: this.user,
                    confirmed: this.confirmed,
                },
            })
        )
    }
}

const manager = new Auth0Manager()
window.storybookAuthManager = manager
export default manager
