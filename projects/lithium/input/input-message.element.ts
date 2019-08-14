import { LitElement, html } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './input-message.styles';

// @dynamic
export class LithiumInputMessage extends LitElement {
  static get styles() { return styles; }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

registerElementSafely('li-input-message', LithiumInputMessage);
