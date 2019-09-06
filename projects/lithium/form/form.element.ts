import { LitElement, html } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './form.element.sass';

/**
 * Form, wrapper container for basic form styles
 *
 * @noInheritDoc
 * @element `li-form`
 * @slot `default` - Content slot for checkbox inputs
 */
// @dynamic
export class LithiumForm extends LitElement {
  static get styles() {
    return styles;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

registerElementSafely('li-form', LithiumForm);
