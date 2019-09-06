import { LitElement, html } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './input-message.element.sass';

/**
 * Input message, display messages related for inputs
 *
 * @noInheritDoc
 * @element `li-input-message`
 * @slot `default` - Text content for message
 */
// @dynamic
export class LithiumInputMessage extends LitElement {
  static get styles() {
    return styles;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

registerElementSafely('li-input-message', LithiumInputMessage);
