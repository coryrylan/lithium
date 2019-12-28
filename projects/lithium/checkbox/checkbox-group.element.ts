import { html, LitElement, property } from 'lit-element';
import { baseStyles, registerElementSafely } from 'lithium-ui/common';
import { styles } from './checkbox-group.element.css';

/**
 * Radio Group, group element to associate a collection of radio inputs
 *
 * @noInheritDoc
 * @element li-checkbox-group
 * @slot default - Content slot for checkbox inputs
 */
// @dynamic
export class LithiumCheckboxGroup extends LitElement {
  /** Display checkbox elements inline */
  @property({ type: Boolean, reflect: true }) inline: boolean;

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
