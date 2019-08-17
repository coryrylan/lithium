import { html } from 'lit-html';
import { registerElementSafely } from 'lithium-ui/common';
import { IconService, checkIcon } from 'lithium-ui/icons';
import { LithiumInput } from 'lithium-ui/input';
import { styles } from './checkbox.styles';

IconService.addIcons(checkIcon);

/**
 * Checkbox, standard checkbox input with accessibility and error enhancements.
 *
 * @noInheritDoc
 * @slot `default` - Content slot for checkbox input
 * @styleAttr `error` - Set error styles
 * @cssProp `--li-checkbox-disabled-color`
 * @cssProp `--li-checkbox-border-color`
 * @cssProp `--li-checkbox-background-color`
 */
// @dynamic
export class LithiumCheckbox extends LithiumInput {
  private checkbox: any;

  static get styles() { return styles; }

  render() {
    return html`
      <slot></slot>
      <div class="box"></div>
      <li-icon name="check"></li-icon>
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    this.checkbox = this.querySelector('input');
    this.updateHostChecked();
    this.updateHostDisabled();

    this.checkbox.addEventListener('change', () => this.updateHostChecked());
    this.checkbox.addEventListener('focusin', () => this.setAttribute('focused', ''));
    this.checkbox.addEventListener('focusout', () => this.removeAttribute('focused'));
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
