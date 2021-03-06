import { html } from 'lit-element';
import { baseStyles, property, querySlot, registerElementSafely } from 'lithium-ui/common';
import 'lithium-ui/icon';
import { checkIcon, IconService } from 'lithium-ui/icon-shapes';
import { LithiumInput } from 'lithium-ui/input';
import { styles } from './checkbox.element.css';

IconService.addIcons(checkIcon);

/**
 * Checkbox, standard checkbox input with accessibility and error enhancements.
 *
 * @noInheritDoc
 * @element li-checkbox
 * @slot default - Content slot for checkbox input
 * @cssprop --color
 * @cssprop --color-disabled
 * @cssprop --border-color
 * @cssprop --background
 */
// @dynamic
export class LithiumCheckbox extends LithiumInput {
  /** Set input in an error state */
  @property({ type: Boolean }) error: boolean;

  static get styles() {
    return [baseStyles, styles];
  }

  @querySlot('input') protected checkbox: HTMLInputElement;
  private observer: MutationObserver;

  render() {
    return html`
      <slot></slot>
      <div class="box"></div>
      <li-icon name="check"></li-icon>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.updateHostChecked();
    this.updateHostDisabled();
    this.checkbox.addEventListener('change', () => this.updateHostChecked());
    this.checkbox.addEventListener('focusin', () => this.setAttribute('focused', ''));
    this.checkbox.addEventListener('focusout', () => this.removeAttribute('focused'));

    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'disabled') {
          this.updateHostDisabled();
        }
      });
    });

    this.observer.observe(this.checkbox, { attributes: true });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.observer.disconnect();
  }

  private updateHostChecked() {
    if (this.checkbox.checked) {
      this.setAttribute('checked', '');
    } else {
      this.removeAttribute('checked');
    }
  }

  private updateHostDisabled() {
    if (this.checkbox.disabled || this.checkbox.getAttribute('disabled')) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }
}

registerElementSafely('li-checkbox', LithiumCheckbox);

declare global {
  interface HTMLElementTagNameMap {
    'li-checkbox': LithiumCheckbox;
  }
}
