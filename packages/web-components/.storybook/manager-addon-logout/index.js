import React, { useEffect } from 'react'
import { addons, types } from '@storybook/addons'

const ADDON_ID = 'auth-logout-addon'
const PANEL_ID = `${ADDON_ID}/panel`

function LogoutButton() {
    useEffect(() => {
        // no-op; kept for parity if we want to subscribe to channels later
    }, [])

    function handleClick() {
        try {
            const preview =
                document.getElementById('storybook-preview-iframe') ||
                document.querySelector('iframe[src*="iframe.html"]')
            const msg = {
                type: 'storybook-manager-logout',
                payload: { federated: true },
            }
            if (preview && preview.contentWindow)
                preview.contentWindow.postMessage(msg, '*')
            else window.postMessage(msg, '*')
        } catch (e) {
            // ignore
        }
    }

    return React.createElement(
        'button',
        {
            id: 'sb-manager-logout-react',
            className: 'sb-manager-logout-btn',
            onClick: handleClick,
            style: {
                display: 'block',
                width: '100%',
                boxSizing: 'border-box',
                margin: '8px 12px',
            },
        },
        'Log out'
    )
}

// Register the addon and inject a manager-side logout button into the sidebar
addons.register(ADDON_ID, () => {
    // Create a native DOM button and insert it into the Storybook sidebar.
    // We intentionally avoid relying on the manager toolbar APIs (types.TOOL)
    // because those place controls in the top toolbar. This code inserts
    // the button below the search field in the left nav, matching the
    // project's desired layout and CSS selectors in `manager.css`.

    let observer = null

    function postLogoutMessage() {
        try {
            const preview =
                document.getElementById('storybook-preview-iframe') ||
                document.querySelector('iframe[src*="iframe.html"]')
            const msg = {
                type: 'storybook-manager-logout',
                payload: { federated: true },
            }
            if (preview && preview.contentWindow)
                preview.contentWindow.postMessage(msg, '*')
            else window.postMessage(msg, '*')
        } catch (e) {
            // ignore
        }
    }

    function createSidebarButton() {
        // Prefer to place immediately after the search field if present
        const searchEl =
            document.querySelector('.sidebar-container .search-field') ||
            document.querySelector('.sidebar-header')
        // See if a button already exists (from previous runs). If so, we'll reuse/move it.
        const existingBtn = document.getElementById('sb-manager-logout-dom')
        const sidebarContainer =
            document.querySelector('.sidebar-container') ||
            document.querySelector('nav')

        const btn =
            existingBtn ||
            (function () {
                const n = document.createElement('button')
                n.id = 'sb-manager-logout-dom'
                n.className = 'sb-manager-logout-btn'
                n.textContent = 'Log out'
                n.style.display = 'block'
                n.style.width = '100%'
                n.style.margin = '0'
                // If the parent uses flex layout, force the button to its own row
                n.style.flexBasis = '100%'
                n.style.flexShrink = '0'
                n.style.alignSelf = 'stretch'
                n.style.minWidth = '0'
                n.style.order = '2'
                n.addEventListener('click', postLogoutMessage)
                return n
            })()

        // If an existing button was inside the search wrapper, detach it so we can move it
        if (existingBtn && existingBtn.parentNode)
            existingBtn.parentNode.removeChild(existingBtn)

        // If we found a search element, insert after its container so the
        // logout button sits on its own line (prevents crowding the input).
        if (searchEl) {
            // prefer inserting a dedicated wrapper after the search wrapper
            const searchWrapper = searchEl.parentNode || searchEl
            try {
                // Create or reuse a container that will always be a sibling after the search wrapper
                let container = document.getElementById(
                    'sb-manager-logout-container'
                )
                if (!container) {
                    container = document.createElement('div')
                    container.id = 'sb-manager-logout-container'
                    // styling: ensure block and spacing; leave detailed styling to CSS
                    container.style.display = 'block'
                    container.style.width = '100%'
                    container.style.padding = '6px 12px 12px'
                }

                // If the container is not the correct sibling, insert it after the wrapper
                if (searchWrapper && searchWrapper.insertAdjacentElement) {
                    // If container is already in DOM but not after searchWrapper, move it
                    if (
                        container.parentNode &&
                        container.parentNode !== searchWrapper.parentNode
                    ) {
                        container.parentNode.removeChild(container)
                    }
                    // Insert container directly after the searchWrapper so it is not nested inside it
                    if (!searchWrapper.nextSibling)
                        searchWrapper.parentNode.appendChild(container)
                    else
                        searchWrapper.insertAdjacentElement(
                            'afterend',
                            container
                        )
                }

                // Append or move the button into the container
                if (btn.parentNode !== container) container.appendChild(btn)

                if (observer) observer.disconnect()
                return true
            } catch (e) {
                // ignore and fallthrough to other strategies
            }
        }

        // Otherwise append to the top of the sidebar container
        if (sidebarContainer) {
            // try to insert after the header if present
            const header = sidebarContainer.querySelector('.sidebar-header')
            if (header && header.parentNode) {
                if (header.nextSibling)
                    header.parentNode.insertBefore(btn, header.nextSibling)
                else header.parentNode.appendChild(btn)
                if (observer) observer.disconnect()
                return true
            }

            // fallback: append to container
            sidebarContainer.appendChild(btn)
            if (observer) observer.disconnect()
            return true
        }

        return false
    }

    // Try to create immediately in case sidebar is already rendered
    if (!createSidebarButton()) {
        // Observe DOM and attempt to insert when sidebar becomes available
        observer = new MutationObserver(() => {
            // Try to create the button if missing, and always ensure placement
            createSidebarButton()
            ensurePlacement()
        })
        observer.observe(document.documentElement || document.body, {
            childList: true,
            subtree: true,
        })
    }

    // Ensure the button is placed after the search wrapper, even if other code
    // re-parented it into the search container. This runs after insertions.
    function ensurePlacement() {
        const btn = document.getElementById('sb-manager-logout-dom')
        if (!btn) return

        const searchEl =
            document.querySelector('.sidebar-container .search-field') ||
            document.querySelector('.sidebar-header')
        if (!searchEl) return

        const searchWrapper = searchEl.parentNode || searchEl
        const insertionPoint = searchWrapper.parentNode || searchWrapper
        if (!insertionPoint) return

        // If the button is currently inside the searchWrapper (or its descendants), move it
        if (searchWrapper.contains(btn)) {
            try {
                // detach then insert after the wrapper
                if (btn.parentNode) btn.parentNode.removeChild(btn)
                if (searchWrapper.nextSibling)
                    insertionPoint.insertBefore(btn, searchWrapper.nextSibling)
                else insertionPoint.appendChild(btn)
            } catch (e) {
                // ignore placement errors
            }
        }
    }
})

export default {}
