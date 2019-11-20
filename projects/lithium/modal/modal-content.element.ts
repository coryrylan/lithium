import { html, LitElement } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';

export class LithiumModalContent extends LitElement {
  protected render() {
    return html`
      <slot></slot>
    `;
  }
}

registerElementSafely('li-modal-content', LithiumModalContent);

declare global {
  interface HTMLElementTagNameMap {
    'li-modal-content': LithiumModalContent;
  }
}
