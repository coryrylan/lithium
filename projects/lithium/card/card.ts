import { LitElement, html, property } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './card.styles';

// @dynamic
export class LithiumCard extends LitElement {
  static get styles() { return styles; }

  render() {
    return html`
      <slot></slot>
      <slot name="footer"></slot>
    `;
  }
}

registerElementSafely('li-card', LithiumCard);
