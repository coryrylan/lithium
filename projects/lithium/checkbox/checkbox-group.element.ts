import { html, LitElement } from 'lit-element';
import { baseStyles, registerElementSafely } from 'lithium-ui/common';
import { styles } from './checkbox-group.element.css';

/**
 * Radio Group, group element to associate a collection of radio inputs
 *
 * @noInheritDoc
 * @element li-checkbox-group
 * @slot default - Content slot for checkbox inputs
 * @attr {String} inline - Display checkbox elements inline
 */
// @dynamic
export class LithiumCheckboxGroup extends LitElement {
  static get styles() {
    return [baseStyles, styles];
  }

  render() {
    return html`
      <fieldset>
        <slot></slot>
      </fieldset>
    `;
  }
}

registerElementSafely('li-checkbox-group', LithiumCheckboxGroup);

declare global {
  interface HTMLElementTagNameMap {
    'li-checkbox-group': LithiumCheckboxGroup;
  }
}
