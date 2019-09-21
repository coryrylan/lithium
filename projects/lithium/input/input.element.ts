import { html, LitElement, property } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { LithiumInputError } from './input-error.element';
import { LithiumInputMessage } from './input-message.element';
import { styles } from './input.element.css';

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

  protected input: HTMLElement;
  protected label: HTMLElement;
  protected message: LithiumInputMessage;
  protected errorMessage: LithiumInputError;
  protected inputId = `li-input-id-${idCount++}`;
  protected messageId = `li-input-id-${idCount++}`;
  protected errorMessageId = `li-input-id-${idCount++}`;

  static get styles(): any | any[] {
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
