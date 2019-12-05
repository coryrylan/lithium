import { html, LitElement } from 'lit-element';
import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './button-group.element.css';

/**
 * Button Group, group related button actions
 *
 * @noInheritDoc
 * @element li-button-group
 * @slot default - Content slot for modal body
 * @attr {String} secondary - Apply secondary style.
 */
// @dynamic
export class LithiumButtonGroup extends LitElement {
  static get styles() {
    return styles;
  }

  protected render() {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'li-button-group': LithiumButtonGroup;
  }
}

registerElementSafely('li-button-group', LithiumButtonGroup);
