import { LitElement, html, property } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './input.styles';
import { LithiumInputMessage } from './input-message.element';
import { LithiumInputError } from './input-error.element';

let idCount = 0;

/**
 * Input, standard text input with accessibility and error enhancements.
 *
 * @noInheritDoc
 * @element `li-input`
 * @slot `default` - Content slot for modal body
 * @styleAttr `error` - Set error styles
 * @cssProp `--li-input-color`
 * @cssProp `--li-input-background`
 * @cssProp `--li-input-border-color`
 * @cssProp `--li-input-border-radius`
 * @cssProp `--li-input-error-color`
 * @cssProp `--li-input-disabled-background`
 */
// @dynamic
export class LithiumInput extends LitElement {
  @property({ type: Boolean, reflect: true }) error = false;

  private label: HTMLElement;
  private input: HTMLElement;
  private message: LithiumInputMessage;
  private errorMessage: LithiumInputError;

  private inputId = `li-input-id-${idCount++}`;
  private messageId = `li-input-id-${idCount++}`;
  private errorMessageId = `li-input-id-${idCount++}`;

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    const input = this.querySelector('input');
    const textarea = this.querySelector('textarea');
    const select = this.querySelector('select');
    this.input = input ? input : textarea ? textarea : select;

    this.label = this.querySelector('label');
    this.message = this.querySelector('li-input-message');
    this.errorMessage = this.querySelector('li-input-error');

    this.linkLabelIds();
  }

  private linkLabelIds() {
    this.input.id = this.inputId;
    this.label.setAttribute('for', this.inputId);
    this.input.setAttribute('aria-describedby', `${this.messageId} ${this.errorMessageId}`);

    if (this.message) {
      this.message.id = this.messageId;
    }

    if (this.errorMessage) {
      this.errorMessage.id = this.errorMessageId;
    }
  }
}

registerElementSafely('li-input', LithiumInput);
registerElementSafely('li-input-error', LithiumInputError);
registerElementSafely('li-input-message', LithiumInputMessage);
