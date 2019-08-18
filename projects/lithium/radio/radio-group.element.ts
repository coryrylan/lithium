import { LitElement, property, html } from 'lit-element';

import { LithiumRadio } from './radio.element';
import { styles } from './radio-group.styles';

/**
 * Radio Group, group element to associate a collection of radio inputs
 *
 * @noInheritDoc
 * @element `li-radio-group`
 * @slot `default` - Content slot for radio input
 * @styleAttr `inline` - Display radio elements inline
 */
// @dynamic
export class LithiumRadioGroup extends LitElement {
  static get styles() { return styles; }

  /** Name provides the name for each radio and will automatically associate all radios in element */
  @property({ type: String }) name = '';

  private liRadioElements: LithiumRadio[];
  private liRadioInputs: HTMLElement[];

  render() {
    return html`
      <fieldset>
        <slot></slot>
      </fieldset>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.liRadioElements = Array.from(this.querySelectorAll('li-radio'));
    this.liRadioInputs = this.liRadioElements.map(e => e.querySelector('input[type=radio]'));
    this.liRadioInputs.forEach(radio => radio.setAttribute('name', this.name));
  }

  /** internal */
  _clearRadios() {
    this.liRadioElements.forEach(radio => radio.removeAttribute('checked'));
  }
}
