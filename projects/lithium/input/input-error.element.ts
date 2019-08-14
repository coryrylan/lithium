import { LitElement, html } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './input-error.styles';

/**
 * Input error, display error validation messages related for inputs
 *
 * @noInheritDoc
 * @slot `default` - Text content for message
 * @cssProp `--li-input-error-color`
 */
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
