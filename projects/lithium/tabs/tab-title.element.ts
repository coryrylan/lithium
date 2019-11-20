import { html, LitElement } from 'lit-element';
import { registerElementSafely } from 'lithium-ui/common';

// @dynamic
export class LithiumTabTitle extends LitElement {
  render() {
    return html`
      <slot></slot>
    `;
  }
}

registerElementSafely('li-tab-title', LithiumTabTitle);

declare global {
  interface HTMLElementTagNameMap {
    'li-tab-title': LithiumTabTitle;
  }
}
