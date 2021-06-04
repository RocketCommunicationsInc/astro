import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rux-pop-up-menu',
  styleUrl: 'rux-pop-up-menu.scss',
  shadow: true,
})
export class RuxPopUpMenu {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

// import { LitElement, html, css } from 'lit-element';

// export class RuxPopUpMenu extends LitElement {
//   static get properties() {
//     return {
//       data: {
//         type: Array,
//       },
//       selected: {
//         type: Object,
//       },
//       expanded: {
//         type: Boolean,
//         reflect: true,
//       },
//       _trigger: {
//         type: Object,
//       },
//       onPopUpMenuItemSelected: {
//         type: Function
//       },
//       onPopUpMenuExpandedChange: {
//         type: Function
//       }
//     };
//   }

//   constructor() {
//     super();

//     this.data = [];
//     this.selected = {};
//     this.expanded = false;

//     this.left = 0;
//     this.top = 0;

//     this._handleClick = this.handleClick.bind(this);
//     this._handleOutsideClick = this.handleOutsideClick.bind(this);
//     this._handleMenuItemClick = this.handleMenuItemClick.bind(this);
//   }

//   connectedCallback() {
//     super.connectedCallback();
//     this._trigger = this.parentElement.querySelector(`[aria-controls="${this.id}"]`);
//     this._trigger.addEventListener('mousedown', this._handleClick);
//   }

//   disconnectedCallback() {
//     this._trigger.removeEventListener('mousedown', this._handleClick);
//     super.disconnectedCallback();
//   }

//   findInObject(arr, key) {
//     arr.forEach((a) => {
//       if (a.key === key) {
//         a.selected = true;
//         this.found = a;
//       } else {
//         delete a.selected;
//         if (a.children) {
//           this.findInObject(a.children, key);
//         }
//       }
//     });

//     return this.found;
//   }

//   handleClick() {
//     this.show();
//   }

//   handleOutsideClick(e) {
//     const target = e
//         .composedPath()
//         .find((element) => element.id && element.id === this._trigger.getAttribute('aria-controls'));
//     target ? this._trigger.addEventListener('mousedown', this._click) : this.hide();
//   }

//   handleMenuItemClick(e) {
//     this.selected =  this.data.find((item) => item.id === e.currentTarget.dataset.key);
//     if(!!this.onPopUpMenuItemSelected){
//       this.onPopUpMenuItemSelected(this.selected);
//     }
//     this.dispatchEvent(
//         new CustomEvent('pop-up-menu-item-selected', {
//           detail: {
//             selected: this.selected,
//           },
//           bubbles: true,
//           composed: true,
//         })
//     );
//     this.hide();
//   }

//   show() {
//     this._setMenuPosition();
//     this.expanded = true;
//     if(!!this.onPopUpMenuExpandedChange){
//       this.onPopUpMenuExpandedChange(true);
//     }

//     const debounce = setTimeout(() => {
//       window.addEventListener('resize', () => this._setMenuPosition());
//       window.addEventListener('mousedown', this._handleOutsideClick);
//       clearTimeout(debounce);
//     }, 10);

//     this._trigger.removeEventListener('mousedown', this._handleClick);

//     this._menuItems = this.shadowRoot.querySelectorAll('[role="menuitem"]');
//     this._menuItems.forEach((item) => {
//       item.addEventListener('mouseup', this._handleMenuItemClick);
//     });
//   }

//   hide() {
//     this.expanded = false;
//     if(!!this.onPopUpMenuExpandedChange){
//       this.onPopUpMenuExpandedChange(false);
//     }

//     window.removeEventListener('mousedown', this._handleOutsideClick);
//     window.removeEventListener('resize', this);

//     this._menuItems.forEach((item) => {
//       item.removeEventListener('mouseup', this._handleMenuItemClick);
//     });

//     this._trigger.addEventListener('mousedown', this._handleClick);
//   }

//   _setMenuPosition() {
//     const menuBounds = this.getBoundingClientRect();
//     const triggerBounds = this._trigger.getBoundingClientRect();
//     const caret = parseInt(getComputedStyle(this, ':after').height);

//     const padding = 16;

//     this.left =
//       menuBounds.width + triggerBounds.left - padding > window.innerWidth
//         ? triggerBounds.right - menuBounds.width
//         : triggerBounds.left - padding;

//     this.top = triggerBounds.bottom + padding / 2 + caret / 2;

//     if (menuBounds.height + triggerBounds.bottom + padding > window.innerHeight) {
//       this.top = triggerBounds.top - menuBounds.height - caret;
//       this.classList.add('from-top');
//     } else {
//       this.classList.remove('from-top');
//     }

//     this.style.left = `${this.left}px`;
//     this.style.top = `${this.top}px`;

//     const caretLeft = triggerBounds.left - this.left;
//     this.style.setProperty('--caretLeft', `${caretLeft}px`);
//   }

//   render() {
//     const list = this.data.map((item, index) => {
//       return item.hasOwnProperty('role') && item.role === 'seperator' ? 
//         html`<li role="seperator"></li>` :
//         html`<li 
//                 data-key="${item.hasOwnProperty('id') ? item.id : index }" 
//                 role="menuitem" 
//                 tabindex="-1"
//               >
//                ${item.label}  
//              </li>`
//     });

//     return html`
//       <ul role="menu" aria-expanded="${this.expanded.toString()}">
//         ${list}
//       </ul>
//       <slot></slot>
//     `;
//   }

//   static get styles() {
//     return css`
//       :host {
//         --caretLeft: 2px;
//         --caretSize: 1.875rem;
//         --transitionSpeed: 0.1667s;

//         opacity: 0;
//         font-size: 1rem;

//         margin: 0;
//         padding: 0;

//         position: absolute;
//         pointer-events: none;

//         color: var(--colorBlack, rgb(0, 0, 0));

//         background-color: var(--popupMenuBorderColor);
//         border: 1px solid var(--popupMenuBorderColor);
//         border-top-width: 4px;
//         z-index: 10000;

//         -webkit-user-select: none;
//         -moz-user-select: none;
//         -ms-user-select: none;
//         user-select: none;

//         border-radius: 3px;

//         top: -9999rem;
//         left: -9999rem;

//         transition: opacity 0.1667s ease-out;
//         filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
//       }

//       :host([expanded]) {
//         pointer-events: auto;
//         opacity: 1;
//         transition: opacity 0.0667s ease-in;
//       }

//       :host::after {
//         content: '';
//         display: block;
//         position: absolute;
//         z-index: 1;

//         border: 8px solid transparent;
//         border-bottom: 11px solid var(--popupCaretBackgroundColor);

//         left: var(--caretLeft, 2px);
//         top: -1.4375rem;
//       }

//       ul {
//         position: relative;
//         list-style: none;
//         padding: 0;
//         margin: 0;

//         background-color: var(--popupMenuBackgroundColor);

//         z-index: 2;
//         border-radius: 2px;
//       }

//       li:last-of-type {
//         border: none;
//         border-radius: 0 0 2px 2px;
//       }

//       li:first-of-type {
//         border: none;
//         border-radius: 2px 2px 0 0;
//       }

//       li:not([role='seperator']) {
//         display: block;
//         padding: 0.15rem 0.75rem;
//         color: var(--popupMenuTextColor);
//         text-decoration: none;

//         min-width: 15em;
//         max-width: 20em;

//         word-wrap: none;
//         white-space: nowrap;
//         text-overflow: ellipsis;
//         overflow: hidden;
//       }

//       li:not([role='seperator']):hover {
//         background-color: var(--popupMenuItemHoverBackgroundColor);
// 				color: var(--popupMenuItemHoverTextColor);
//       }

//       :host(.from-top) {
//         border-top-width: 1px;
//         border-bottom-width: 4px;
//       }

//       :host(.from-top)::after {
//         top: unset;
//         bottom: -23px;
//         transform: rotate(180deg);
//       }

//       [role='seperator'] {
//         pointer-events: none;
//         height: 6px;
//         border-top: 1px dashed var(--popupMenuItemSeperatorBorderColor) !important;
//         margin: 6px 0.5rem 0 0.5rem;
//       }
//     `;
//   }
// }
