import { html, LitElement } from 'lit-element';
import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './input-error.element.css';

/**
 * Input error, display error validation messages related for inputs
 *
 * @noInheritDoc
 * @element li-input-error
 * @slot default - Text content for message
 * @cssprop --li-input-error-color
 */
// @dynamic
export class LithiumInputError extends LitElement {
  static get styles() {
    return styles;
  }

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

declare global {
  interface HTMLElementTagNameMap {
    'li-input-error': LithiumInputError;
  }
}
