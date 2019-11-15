import { html, LitElement } from 'lit-element';

export class LithiumCardContent extends LitElement {
  protected render() {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'li-card-content': LithiumCardContent;
  }
}
