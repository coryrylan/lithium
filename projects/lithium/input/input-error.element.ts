import { LitElement, html } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './input-error.styles';

// @dynamic
export class LithiumInputError extends LitElement {
  static get styles() { return styles; }

  render() {
    return html`
      <slot></slot>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('aria-live', 'polite');
  }
}

registerElementSafely('li-input-error', LithiumInputError);
