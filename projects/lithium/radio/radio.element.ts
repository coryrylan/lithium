import { html } from 'lit-element';

import { querySlot, registerElementSafely } from 'lithium-ui/common';
import { checkIcon, IconService } from 'lithium-ui/icons';
import { LithiumInput } from 'lithium-ui/input';
IconService.addIcons(checkIcon);

import { LithiumRadioGroup } from './radio-group.element';
import { styles } from './radio.element.css';

/**
 * Radio, standard radio input with accessibility and error enhancements.
 *
 * @noInheritDoc
 * @element li-radio
 * @slot default - Content slot for radio input
 * @cssprop --li-radio-border-color
 * @cssprop --li-radio-background-color
 * @cssprop --li-radio-fill-background-color
 * @cssprop --li-radio-disabled-label-color
 */
// @dynamic
export class LithiumRadio extends LithiumInput {
  static get styles() {
    return styles;
  }

  @querySlot('input[type=radio]') private radio: HTMLInputElement;
  private observer: MutationObserver;

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
    this.radio.addEventListener('click', () => this.setHostCheckedAttribute());
    this.radio.addEventListener('focusin', () => this.setAttribute('focused', ''));
    this.radio.addEventListener('focusout', () => this.removeAttribute('focused'));

    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'disabled') {
          this.updateHostDisabled();
        }
      });
    });

    this.observer.observe(this.radio, { attributes: true });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.observer.disconnect();
  }

  firstUpdated(props: Map<string, any>) {
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
