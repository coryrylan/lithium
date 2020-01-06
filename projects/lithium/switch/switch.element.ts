import { html } from 'lit-element';
import { LithiumCheckbox } from 'lithium-ui/checkbox';
import { baseStyles, property, registerElementSafely } from 'lithium-ui/common';
import { styles } from './switch.element.css';

/**
 * Switch, switch input with accessibility and error enhancements.
 *
 * @noInheritDoc
 * @element li-switch
 * @slot default - Content slot for checkbox input
 * @cssprop --color
 * @cssprop --color-disabled
 * @cssprop --border-color
 * @cssprop --background
 */
// @dynamic
export class LithiumSwitch extends LithiumCheckbox {
  /** Set input in an error state */
  @property({ type: Boolean }) error: boolean;

  static get styles() {
    return [baseStyles, styles];
  }

  render() {
    return html`
      <div @click="${() => this.switch()}" class="switch">
        <slot></slot>
        <span class="switch-label" data-on="On" data-off="Off"></span>
        <span class="switch-handle"></span>
      </div>
    `;
  }

  switch() {
    this.checkbox.click();
    this.checkbox.checked ? this.checkbox.setAttribute('checked', '') : this.checkbox.removeAttribute('checked');
  }
}

registerElementSafely('li-switch', LithiumSwitch);

declare global {
  interface HTMLElementTagNameMap {
    'li-switch': LithiumSwitch;
  }
}
