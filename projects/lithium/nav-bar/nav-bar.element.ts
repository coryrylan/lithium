import { html, LitElement } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './nav-bar.element.css';

/**
 * Nav Bar, standard navigation bar with basic layout
 *
 * @noInheritDoc
 * @element li-nav-bar
 * @slot default - Content slot for nav bar
 * @attr {String} sticky - Make nav bar sticky and position to top of page
 * @attr {String} li-nav-bar-right - Align nav links to right
 * @cssprop --background
 * @cssprop --background-hover
 * @cssprop --box-shadow
 * @cssprop --color
 */
// @dynamic
export class LithiumNavBar extends LitElement {
  static get styles() {
    return styles;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

registerElementSafely('li-nav-bar', LithiumNavBar);

declare global {
  interface HTMLElementTagNameMap {
    'li-nav-bar': LithiumNavBar;
  }
}
