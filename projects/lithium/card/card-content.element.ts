import { html, LitElement } from 'lit-element';
import { registerElementSafely } from 'lithium-ui/common';

/**
 * Card Content
 *
 * @noInheritDoc
 * @element li-card-content
 * @slot default - Content slot for card content
 */
// @dynamic
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
