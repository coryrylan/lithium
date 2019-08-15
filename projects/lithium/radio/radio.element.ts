import { html, LitElement, property } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { LithiumInput } from 'lithium-ui/input';
import { IconService, checkIcon } from 'lithium-ui/icons';
IconService.addIcons(checkIcon);

import { styles } from './radio.styles';

/**
 * Radio, standard radio input with accessibility and error enhancements.
 *
 * @noInheritDoc
 * @slot `default` - Content slot for radio input
 * @cssProp `--li-radio-border-color`
 * @cssProp `--li-radio-background-color`
 * @cssProp `--li-radio-fill-background-color`
 * @cssProp `--li-radio-disabled-label-color`
 */
// @dynamic
export class LithiumRadioGroup extends LitElement {
  /** Name provides the name for each radio and will automatically associate all radios in element */
  @property({ type: String }) name = '';

  liRadioElements: LithiumRadio[];
  liRadioInputs: HTMLElement[];

  render() {
    return html`
      <slot></slot>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.liRadioElements = Array.from(this.querySelectorAll('li-radio'));
    this.liRadioInputs = this.liRadioElements.map(e => e.querySelector('input[type=radio]'));
    this.liRadioInputs.forEach(radio => radio.setAttribute('name', this.name));
  }

  _clearRadios() {
    this.liRadioElements.forEach(radio => radio.removeAttribute('checked'));
  }
}

/**
 * Radio, standard radio input with accessibility and error enhancements.
 *
 * @noInheritDoc
 * @slot `default` - Content slot for modal body
 * @cssProp ``
 */
// @dynamic
export class LithiumRadio extends LithiumInput {
  static get styles() { return styles; }

  private radio: any;

  render() {
    return html`
      <slot></slot>
      <div class="circle"></div>
      <div class="circle-fill"></div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.radio = this.querySelector('input[type=radio]');
    this.radio.addEventListener('click', () => this.setHostCheckedAttribute());
  }

  firstUpdated(props) {
    super.firstUpdated(props);
    this.updateHostDisabled();

    if (this.radio.checked) {
      this.setHostCheckedAttribute();
    }
  }

  private setHostCheckedAttribute() {
    (this.parentElement as LithiumRadioGroup)._clearRadios();
    this.setAttribute('checked', '');
  }

  private updateHostDisabled() {
    if (this.radio.disabled) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }
}

registerElementSafely('li-radio', LithiumRadio);
registerElementSafely('li-radio-group', LithiumRadioGroup);
