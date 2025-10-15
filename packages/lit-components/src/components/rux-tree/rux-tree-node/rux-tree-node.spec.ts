
// Assuming you have installed @open-wc/testing:
// npm install --save-dev @open-wc/testing @web/test-runner-jest @types/jest

import { fixture, html } from '@open-wc/testing';
import { RuxTreeNode } from './rux-tree-node'; // Make sure this path points to your LitElement version of RuxTreeNode

describe('RuxTreeNode', () => {
    let element: RuxTreeNode; // Declare a variable to hold the LitElement instance
    const buttonSpy = jest.fn();

    beforeEach(async () => {
        // Clear any previous calls to the spy before each test
        buttonSpy.mockClear();

        // Use @open-wc/testing's fixture to create and append the element to the DOM.
        // It also waits for the element's first update cycle to complete.
        // The @eventname syntax is how Lit/lit-html listens for custom events.
        element = await fixture<RuxTreeNode>(html`
            <rux-tree-node
                @ruxtreenodeselected=${(ev: CustomEvent) => buttonSpy(ev)}
            ></rux-tree-node>
        `);
    });

    it('Should emit on click', async () => {
        // 'element' already holds the reference to your 'rux-tree-node' instance.
        // No need for querySelector as we have a direct reference.
        
        // Simulate a click on the component.
        element.click();

        // Assertions remain largely the same as Jest is agnostic to the UI framework.
        expect(buttonSpy).toHaveBeenCalledTimes(1);
        // [0][0] - first argument of the first call (which is the CustomEvent)
        expect(buttonSpy.mock.calls[0][0].detail).toEqual('node-1');

        // If your click action caused the component to re-render and you needed
        // to assert something about the updated DOM, you would use:
        // await element.updateComplete;
        // However, for testing event emission, it's usually not necessary as the event
        // is dispatched synchronously with the click.
    });
});
