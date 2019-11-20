import { html, LitElement } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';

export class LithiumModalHeader extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('slot', 'header');
  }

  protected render() {
    return html`
      <slot></slot>
    `;
  }
}

registerElementSafely('li-modal-header', LithiumModalHeader);

declare global {
  interface HTMLElementTagNameMap {
    'li-modal-header': LithiumModalHeader;
  }
}
