import { html } from 'lit-html';
import { registerElementSafely } from 'lithium-ui/common';
import { IconService, checkIcon } from 'lithium-ui/icons';
import { LithiumInput } from 'lithium-ui/input';
import { styles } from './checkbox.styles';

IconService.addIcons(checkIcon);

// @dynamic
export class LithiumCheckbox extends LithiumInput {
  private checkbox: any;

  static get styles() { return styles; }

  render() {
    return html`
      <slot></slot>
      <li-icon name="check"></li-icon>
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    this.checkbox = this.querySelector('input');
    this.updateHostChecked();
    this.updateHostDisabled();

    this.checkbox.addEventListener('change', () => this.updateHostChecked());
  }

  private updateHostChecked() {
    if (this.checkbox.checked) {
      this.setAttribute('checked', '');
    } else {
      this.removeAttribute('checked');
    }
  }

  private updateHostDisabled() {
    if (this.checkbox.disabled) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }
}

registerElementSafely('li-checkbox', LithiumCheckbox);
