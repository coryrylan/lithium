import { html, LitElement } from 'lit-element';
import { baseStyles, property, registerElementSafely } from 'lithium-ui/common';
import { styles } from './button-group.element.css';

/**
 * Button Group, group related button actions
 *
 * @noInheritDoc
 * @element li-button-group
 * @slot default - Content slot for modal body
 */
// @dynamic
export class LithiumButtonGroup extends LitElement {
  /** Display group as a group of secondary actions */
  @property({ type: String }) action: 'secondary' | '';

  static get styles() {
    return [baseStyles, styles];
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
