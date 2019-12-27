import { html, LitElement } from 'lit-element';
import { baseStyles, registerElementSafely } from 'lithium-ui/common';
import { styles } from './input-message.element.css';

/**
 * Input message, display messages related for inputs
 *
 * @noInheritDoc
 * @element li-input-message
 * @slot default - Text content for message
 */
// @dynamic
export class LithiumInputMessage extends LitElement {
  static get styles() {
    return [baseStyles, styles];
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

registerElementSafely('li-input-message', LithiumInputMessage);

declare global {
  interface HTMLElementTagNameMap {
    'li-input-message': LithiumInputMessage;
  }
}
