import { html, render } from 'lit-html'
import { withKnobs } from '@storybook/addon-knobs'
// import { withConsole } from '@storybook/addon-console';
import Readme from '../components/rux-pop-up-menu/readme.md'
import { withActions } from '@storybook/addon-actions'

export default {
    title: 'Components/Pop Up Menu',
    decorators: [
        withActions(
            'rux-menu-item-clicked',
            'rux-menu-will-open',
            'rux-menu-will-close',
            'rux-menu-did-open',
            'rux-menu-did-close'
        ),
        withKnobs,
    ],
}

export const PopUpMenu = () => {
    window.addEventListener('menuItemClicked', (e: CustomEvent) => {
        console.log('Pop Up Menu Item Selected', e.detail.value)
    })

    window.addEventListener('menuWillOpen', (e: CustomEvent) => {
        console.log('Pop Up Menu is opening', e)
    })

    return html`
        <style>
            #demo {
                padding: 5%;
                display: flex;
                justify-content: center;
            }

            #pop-demo {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
            }

            button {
                display: inline-block;
                position: absolute;
            }

            #tl {
                top: 2rem;
                left: 2rem;
            }

            #tr {
                top: 2rem;
                right: 2rem;
            }

            #bl {
                bottom: 2rem;
                left: 2rem;
            }

            #br {
                bottom: 2rem;
                right: 2rem;
            }

            #tc {
                top: 2rem;
                right: 50vw;
            }

            #bc {
                bottom: 2rem;
                right: 50vw;
            }

            #static {
                top: 20rem;
                left: 50rem;
            }
        </style>
        <div class="demo">
            <div id="pop-demo">
                <button
                    aria-controls="popup-menu-1"
                    aria-haspopup="true"
                    class="button"
                    id="tl"
                >
                    tl
                </button>
                <button
                    aria-controls="popup-menu-2"
                    aria-haspopup="true"
                    class="button"
                    id="tr"
                >
                    tr
                </button>
                <button
                    aria-controls="popup-menu-3"
                    aria-haspopup="true"
                    class="button"
                    id="bl"
                >
                    bl
                </button>
                <button
                    aria-controls="popup-menu-4"
                    aria-haspopup="true"
                    class="button"
                    id="br"
                >
                    br
                </button>
                <button
                    aria-controls="popup-menu-5"
                    aria-haspopup="true"
                    class="button"
                    id="tc"
                >
                    tv
                </button>
                <button
                    aria-controls="popup-menu-6"
                    aria-haspopup="true"
                    class="button"
                    id="bc"
                >
                    bc
                </button>
                <button
                    aria-controls="popup-menu-7"
                    aria-haspopup="true"
                    class="button"
                    id="static"
                >
                    bc
                </button>
            </div>

            <rux-pop-up-menu id="popup-menu-1">
                <rux-menu-item>Item 1</rux-menu-item>
                <rux-menu-item-divider></rux-menu-item-divider>
                <rux-menu-item value="2"
                    >Item 2 with an exceedingly long title that overruns the
                    width</rux-menu-item
                >
                <rux-menu-item disabled>Item 3 is disabled</rux-menu-item>
                <rux-menu-item value="Item 4"
                    >Item 4 has a string value</rux-menu-item
                >
                <rux-menu-item href="https://www.astrouxds.com"
                    >Item 5 is an anchor</rux-menu-item
                >
            </rux-pop-up-menu>
            <rux-pop-up-menu id="popup-menu-2">
                <rux-menu-item>Item 1</rux-menu-item>
                <rux-menu-item-divider></rux-menu-item-divider>
                <rux-menu-item value="2"
                    >Item 2 with an exceedingly long title that overruns the
                    width</rux-menu-item
                >
                <rux-menu-item disabled>Item 3 is disabled</rux-menu-item>
                <rux-menu-item value="Item 4"
                    >Item 4 has a string value</rux-menu-item
                >
                <rux-menu-item href="https://www.astrouxds.com"
                    >Item 5 is an anchor</rux-menu-item
                >
            </rux-pop-up-menu>
            <rux-pop-up-menu id="popup-menu-3">
                <rux-menu-item>Item 1</rux-menu-item>
                <rux-menu-item-divider></rux-menu-item-divider>
                <rux-menu-item value="2"
                    >Item 2 with an exceedingly long title that overruns the
                    width</rux-menu-item
                >
                <rux-menu-item disabled>Item 3 is disabled</rux-menu-item>
                <rux-menu-item value="Item 4"
                    >Item 4 has a string value</rux-menu-item
                >
                <rux-menu-item href="https://www.astrouxds.com"
                    >Item 5 is an anchor</rux-menu-item
                >
            </rux-pop-up-menu>
            <rux-pop-up-menu id="popup-menu-4">
                <rux-menu-item>Item 1</rux-menu-item>
                <rux-menu-item-divider></rux-menu-item-divider>
                <rux-menu-item value="2"
                    >Item 2 with an exceedingly long title that overruns the
                    width</rux-menu-item
                >
                <rux-menu-item disabled>Item 3 is disabled</rux-menu-item>
                <rux-menu-item value="Item 4"
                    >Item 4 has a string value</rux-menu-item
                >
                <rux-menu-item href="https://www.astrouxds.com"
                    >Item 5 is an anchor</rux-menu-item
                >
            </rux-pop-up-menu>
            <rux-pop-up-menu id="popup-menu-5">
                <rux-menu-item>Item 1</rux-menu-item>
                <rux-menu-item-divider></rux-menu-item-divider>
                <rux-menu-item value="2"
                    >Item 2 with an exceedingly long title that overruns the
                    width</rux-menu-item
                >
                <rux-menu-item disabled>Item 3 is disabled</rux-menu-item>
                <rux-menu-item value="Item 4"
                    >Item 4 has a string value</rux-menu-item
                >
                <rux-menu-item href="https://www.astrouxds.com"
                    >Item 5 is an anchor</rux-menu-item
                >
            </rux-pop-up-menu>
            <rux-pop-up-menu id="popup-menu-6">
                <rux-menu-item>Item 1</rux-menu-item>
                <rux-menu-item-divider></rux-menu-item-divider>
                <rux-menu-item value="2"
                    >Item 2 with an exceedingly long title that overruns the
                    width</rux-menu-item
                >
                <rux-menu-item disabled>Item 3 is disabled</rux-menu-item>
                <rux-menu-item value="Item 4"
                    >Item 4 has a string value</rux-menu-item
                >
                <rux-menu-item href="https://www.astrouxds.com"
                    >Item 5 is an anchor</rux-menu-item
                >
            </rux-pop-up-menu>
            <rux-pop-up-menu id="popup-menu-7">
                <rux-menu-item>Item 1</rux-menu-item>
                <rux-menu-item-divider></rux-menu-item-divider>
                <rux-menu-item value="2"
                    >Item 2 with an exceedingly long title that overruns the
                    width</rux-menu-item
                >
                <rux-menu-item disabled>Item 3 is disabled</rux-menu-item>
                <rux-menu-item value="Item 4"
                    >Item 4 has a string value</rux-menu-item
                >
                <rux-menu-item href="https://www.astrouxds.com"
                    >Item 5 is an anchor</rux-menu-item
                >
            </rux-pop-up-menu>
        </div>
    `
}

PopUpMenu.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: Readme,
        },
    },
}
