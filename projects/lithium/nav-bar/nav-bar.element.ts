import { LitElement, html } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './nav-bar.styles';

// @dynamic
export class LithiumNavBar extends LitElement {
  static get styles() { return styles; }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

registerElementSafely('li-nav-bar', LithiumNavBar);
