import { LitElement, html } from 'lit-element';

import { styles } from './checkbox-group.styles';

/**
 * Radio Group, group element to associate a collection of radio inputs
 *
 * @noInheritDoc
 * @element `li-checkbox-group`
 * @slot `default` - Content slot for checkbox inputs
 * @styleAttr `inline` - Display checkbox elements inline
 */
// @dynamic
export class LithiumCheckboxGroup extends LitElement {
  static get styles() { return styles; }

  render() {
    return html`
      <fieldset>
        <slot></slot>
      </fieldset>
    `;
  }
}
