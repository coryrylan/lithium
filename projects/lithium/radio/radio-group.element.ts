import { html, LitElement, property } from 'lit-element';
import { querySlotAll, registerElementSafely } from 'lithium-ui/common';
import { styles } from './radio-group.element.css';
import { LithiumRadio } from './radio.element';

/**
 * Radio Group, group element to associate a collection of radio inputs
 *
 * @noInheritDoc
 * @element li-radio-group
 * @slot default - Content slot for radio input
 * @attr {String} inline - Display radio elements inline
 */
// @dynamic
export class LithiumRadioGroup extends LitElement {
  static get styles() {
    return styles;
  }

  /** Name provides the name for each radio and will automatically associate all radios in element */
  @property({ type: String }) name = '';

  @querySlotAll('li-radio') private liRadioElements: NodeListOf<LithiumRadio>;

  render() {
    return html`
      <fieldset>
        <slot></slot>
      </fieldset>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    Array.from(this.liRadioElements)
      .map(e => e.querySelector<HTMLElement>('input[type=radio]'))
      .forEach(radio => radio.setAttribute('name', this.name));
  }

  /** internal */
  _clearRadios() {
    this.liRadioElements.forEach(radio => radio.removeAttribute('checked'));
  }
}

registerElementSafely('li-radio-group', LithiumRadioGroup);

declare global {
  interface HTMLElementTagNameMap {
    'li-radio-group': LithiumRadioGroup;
  }
}
