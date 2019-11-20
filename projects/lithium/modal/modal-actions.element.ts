import { html, LitElement } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';

export class LithiumModalActions extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('slot', 'actions');
  }

  protected render() {
    return html`
      <slot></slot>
    `;
  }
}

registerElementSafely('li-modal-actions', LithiumModalActions);

declare global {
  interface HTMLElementTagNameMap {
    'li-modal-actions': LithiumModalActions;
  }
}
