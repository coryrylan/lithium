import { html, LitElement } from 'lit-element';

import { baseStyles, registerElementSafely } from 'lithium-ui/common';
import { styles } from './form.element.css';

/**
 * Form, wrapper container for basic form styles
 *
 * @noInheritDoc
 * @element li-form
 * @slot default - Content slot for checkbox inputs
 */
// @dynamic
export class LithiumForm extends LitElement {
  static get styles() {
    return [baseStyles, styles];
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

registerElementSafely('li-form', LithiumForm);

declare global {
  interface HTMLElementTagNameMap {
    'li-form': LithiumForm;
  }
}
