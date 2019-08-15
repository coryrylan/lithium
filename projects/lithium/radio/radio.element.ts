import { html, LitElement, property } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { LithiumInput } from 'lithium-ui/input';
import { IconService, checkIcon } from 'lithium-ui/icons';
IconService.addIcons(checkIcon);

import { styles } from './radio.styles';
import { LithiumRadioGroup } from './radio-group.element';

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
export class LithiumRadio extends LithiumInput {
  static get styles() { return styles; }

  private radio: any;

  render() {
    return html`
      <div class="circle">
        <div class="circle-fill"></div>
      </div>
      <slot></slot>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.radio = this.querySelector('input[type=radio]');
    this.radio.addEventListener('click', () => this.setHostCheckedAttribute());
    this.radio.addEventListener('focusin', () => this.setAttribute('focused', ''));
    this.radio.addEventListener('focusout', () => this.removeAttribute('focused'));
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
