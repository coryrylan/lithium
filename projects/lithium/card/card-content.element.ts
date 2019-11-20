import { html, LitElement } from 'lit-element';
import { registerElementSafely } from 'lithium-ui/common';

export class LithiumCardContent extends LitElement {
  protected render() {
    return html`
      <slot></slot>
    `;
  }
}

registerElementSafely('li-card-content', LithiumCardContent);

declare global {
  interface HTMLElementTagNameMap {
    'li-card-content': LithiumCardContent;
  }
}