import themes from './theme'
import {
    extractArgTypes,
    extractComponentDescription,
    setStencilDocJson,
} from '@astrouxds/storybook-addon-docs-stencil'
import './preview.css'

import docJson from '../docs.json'
if (docJson) setStencilDocJson(docJson)

// Initialize Storybook Auth0 manager (non-blocking)
import './auth-client'

// Create an overlay that blocks the preview until the user is authenticated.
function ensureAuthOverlay() {
    if (document.getElementById('sb-auth-overlay')) return

    const overlay = document.createElement('div')
    overlay.id = 'sb-auth-overlay'
    overlay.className = 'sb-auth-overlay'

    const panel = document.createElement('div')
    panel.className = 'sb-auth-overlay-panel'

    const title = document.createElement('h2')
    title.textContent = 'Please sign in to view storybook'

    const info = document.createElement('p')
    info.className = 'sb-auth-overlay-info'
    info.textContent =
        'Sign in with Auth0 to unlock stories and protected content.'

    const loginBtn = document.createElement('button')
    loginBtn.className = 'sb-auth-overlay-btn'
    loginBtn.textContent = 'Sign in'
    loginBtn.addEventListener('click', async () => {
        if (window.storybookAuthManager)
            await window.storybookAuthManager.login()
    })

    const newAccountLink = document.createElement('a')
    newAccountLink.className = 'sb-auth-new-account'
    newAccountLink.textContent = 'Create a new account'
    newAccountLink.href = 'http://localhost:3000/#create-account'
    newAccountLink.target = '_blank'
    newAccountLink.rel = 'noopener noreferrer'
    newAccountLink.setAttribute('role', 'link')
    newAccountLink.setAttribute(
        'aria-label',
        'Create a new Auth0 account (opens in a new tab)'
    )
    newAccountLink.style.display = 'block'
    newAccountLink.style.marginTop = '12px'

    const userSpan = document.createElement('div')
    userSpan.className = 'sb-auth-overlay-user'

    // Create a small federated logout button that appears when the user is signed in
    const federatedLogoutBtn = document.createElement('button')
    federatedLogoutBtn.className = 'sb-auth-logout-btn'
    federatedLogoutBtn.textContent = 'Log out (Federated)'
    federatedLogoutBtn.style.display = 'none'
    federatedLogoutBtn.addEventListener('click', async () => {
        try {
            if (window.storybookAuthManager) {
                // call federated logout explicitly
                await window.storybookAuthManager.logout({ federated: true })
            }
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error('Federated logout failed', e)
        }
    })

    panel.appendChild(title)
    panel.appendChild(info)
    panel.appendChild(loginBtn)
    panel.appendChild(newAccountLink)
    panel.appendChild(userSpan)
    panel.appendChild(federatedLogoutBtn)
    overlay.appendChild(panel)
    // Append to body to make sure it covers Storybook's entire preview area
    const rootEl = document.body || document.documentElement
    rootEl.appendChild(overlay)

    // Create a floating logout button outside the overlay so it's available when stories are visible
    const floatingLogout = document.createElement('button')
    floatingLogout.className = 'sb-auth-floating-logout'
    floatingLogout.textContent = 'Log out'
    floatingLogout.style.display = 'none'
    floatingLogout.addEventListener('click', async () => {
        try {
            if (window.storybookAuthManager) {
                await window.storybookAuthManager.logout({ federated: true })
            }
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error('Floating logout failed', e)
        }
    })
    rootEl.appendChild(floatingLogout)

    // Helper to toggle locked state (blur + disable interactions)
    function setLocked(locked) {
        if (locked) {
            overlay.style.display = 'flex'
            document.documentElement.classList.add('sb-auth-locked')
        } else {
            overlay.style.display = 'none'
            document.documentElement.classList.remove('sb-auth-locked')
        }
    }

    // Inform manager (parent) of initial unauthenticated state so it can lock left nav
    try {
        if (window.parent && window.parent !== window) {
            window.parent.postMessage(
                { type: 'storybook-auth', payload: { isAuthenticated: false } },
                '*'
            )
        }
    } catch (e) {
        // ignore
    }

    // Listen for auth state changes (use "confirmed" when available to ensure ID token exists)
    window.addEventListener('authStateChanged', (ev) => {
        const { isAuthenticated, user, confirmed } = ev.detail || {}
        // Prefer confirmed (ID token present) otherwise fall back to isAuthenticated
        const unlocked =
            typeof confirmed === 'boolean' ? confirmed : !!isAuthenticated
        console.log('auth event:', { isAuthenticated, confirmed, user })
        setLocked(!unlocked)

        if (user) {
            userSpan.textContent = `Signed in as ${user.name || user.email}`
            // show federated logout when confirmed/authenticated
            federatedLogoutBtn.style.display = unlocked
                ? 'inline-block'
                : 'none'
            floatingLogout.style.display = unlocked ? 'inline-block' : 'none'
        } else {
            userSpan.textContent = ''
            federatedLogoutBtn.style.display = 'none'
            floatingLogout.style.display = 'none'
        }
    })

    // Listen for manager requests (e.g., logout requests) via postMessage
    window.addEventListener('message', async (ev) => {
        try {
            const msg = ev && ev.data
            if (!msg) return
            if (msg.type === 'storybook-manager-logout') {
                const { federated } = msg.payload || {}
                if (window.storybookAuthManager) {
                    await window.storybookAuthManager.logout({
                        federated: !!federated,
                    })
                } else {
                    // if manager not ready, queue action
                    window.__pendingLogout = { federated: !!federated }
                }
            } else if (msg.type === 'storybook-manager-force-overlay') {
                // request to force the overlay visible for debugging
                if (typeof window.__forceAuthOverlay === 'function') {
                    window.__forceAuthOverlay()
                } else if (typeof ensureAuthOverlay === 'function') {
                    ensureAuthOverlay()
                }
            }
        } catch (e) {
            // ignore
        }
    })

    // Also subscribe to manager updates when available
    if (window.storybookAuthManager) {
        window.storybookAuthManager.subscribe((s) => {
            const unlocked =
                typeof s.confirmed === 'boolean'
                    ? s.confirmed
                    : !!s.isAuthenticated
            setLocked(!unlocked)
            userSpan.textContent = s.user
                ? `Signed in as ${s.user.name || s.user.email}`
                : ''
            federatedLogoutBtn.style.display = unlocked
                ? 'inline-block'
                : 'none'
            floatingLogout.style.display = unlocked ? 'inline-block' : 'none'
        })
    }

    // default: locked until auth state says otherwise
    setLocked(true)
}

// Create overlay as early as possible so it blocks content while Storybook bundles
try {
    // If DOM is ready, create immediately, else on DOMContentLoaded
    if (
        document.readyState === 'complete' ||
        document.readyState === 'interactive'
    ) {
        ensureAuthOverlay()
    } else {
        window.addEventListener('DOMContentLoaded', ensureAuthOverlay)
    }
} catch (e) {
    // eslint-disable-next-line no-console
    console.error('Failed to create Storybook auth overlay', e)
}

// Add debug helpers to window for easier troubleshooting
if (typeof window !== 'undefined') {
    window.__storybookAuthDebug = function () {
        // eslint-disable-next-line no-console
        console.log('storybookAuthManager', window.storybookAuthManager)
        // eslint-disable-next-line no-console
        console.log('overlay', document.getElementById('sb-auth-overlay'))
    }

    // Force-create an overlay for debugging (call from preview iframe console)
    window.__forceAuthOverlay = function () {
        try {
            const existing = document.getElementById('sb-auth-overlay')
            if (existing) {
                existing.style.display = 'flex'
                document.documentElement.classList.add('sb-auth-locked')
                return existing
            }
            // reuse ensureAuthOverlay if available
            if (typeof ensureAuthOverlay === 'function') {
                ensureAuthOverlay()
                const el = document.getElementById('sb-auth-overlay')
                if (el) {
                    el.style.display = 'flex'
                    document.documentElement.classList.add('sb-auth-locked')
                }
                return el
            }
            return null
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error('forceAuthOverlay failed', e)
            return null
        }
    }

    window.__removeForceAuthOverlay = function () {
        try {
            const el = document.getElementById('sb-auth-overlay')
            if (el) {
                el.style.display = 'none'
            }
            document.documentElement.classList.remove('sb-auth-locked')
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error('removeForceAuthOverlay failed', e)
        }
    }
}

// Respect bypass flag for local dev (set STORYBOOK_AUTH_BYPASS=1 to disable overlay)
try {
    const bypass =
        (process && process.env && process.env.STORYBOOK_AUTH_BYPASS) ||
        window.__STORYBOOK_AUTH_BYPASS
    if (bypass === '1' || bypass === 1 || bypass === true) {
        const overlay = document.getElementById('sb-auth-overlay')
        if (overlay) overlay.style.display = 'none'
    }
} catch (e) {
    // ignore
}

export const parameters = {
    options: {
        storySort: {
            order: [
                'Astro UXDS',
                'Frameworks',
                'Components',
                'Beta',
                'Forms',
                'Utilities',
                'Patterns',
                'Themes',
            ],
        },
    },
    viewport: {
        disable: true,
    },
    docs: {
        extractArgTypes,
        extractComponentDescription,
        theme: themes.dark,
    },
    backgrounds: {
        grid: {
            disable: true,
        },
        disable: true,
    },
    // actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        hideNoControlsWarning: true,
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: { disable: true },
    a11y: {
        element: '#root',
    },
    readme: {
        codeTheme: 'duotone-sea',
        theme: {
            // bodyBackgroundColor: '#969896',
            bodyColor: themes.dark.textColor,
            linkColor: 'rgb(77, 172, 255)',
            hrColor: '#3c4c5d',
            // checkedRadioLabelColor: '#4078c0',
            // kbdColor: '#555',
            // kbdBackgroundColor: '#fcfcfc',
            // kbdBorderColor: '#ccc',
            // kbdBottomBorderColor: '#bbb',
            // kbdBoxShadowColor: '#bbb',
            preBackgroundColor: '#141f2c',
            // fontFamily:
            //   '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            // imgBackgroundColor: '#fff',

            tableTrBackgroundColor: '#182635',
            tableOddTrBackgroundColor: '#141f2c',
            tableTrBorderTopColor: '#3c4c5d',
            tableTdBorderColor: '#3c4c5d',

            codeBackgroundColor: '#060708',
            codeFontFamily:
                'Consolas, "Liberation Mono", Menlo, Courier, monospace',
            preFontFamily:
                'Consolas, "Liberation Mono", Menlo, Courier, monospace',

            // blockquoteBorderLeftColor: '#ddd',
            // h1h2BorderBottomColor: '#ddd',
            // h6Color: '#777',
        },
    },
}

export const tags = ['autodocs']

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'dark',
        toolbar: {
            icon: 'circlehollow',
            items: [
                { value: 'light', icon: 'sun', title: 'Light Theme' },
                { value: 'dark', icon: 'moon', title: 'Dark Theme' },
            ],
            showName: true,
        },
    },
}

// Add a decorator to apply the theme class
export const decorators = [
    (Story, context) => {
        // Apply the selected theme class
        const theme = context.globals.theme
        document.body.className =
            theme === 'light' ? 'light-theme' : 'dark-theme'
        // Ensure auth manager starts up; it's safe to call init repeatedly
        if (
            window.storybookAuthManager &&
            !window.storybookAuthManager.isInitialized
        ) {
            // don't await here, let it initialize in the background
            window.storybookAuthManager.init()
        }

        // Ensure overlay exists and reflect current auth state
        ensureAuthOverlay()

        return Story()
    },
]
