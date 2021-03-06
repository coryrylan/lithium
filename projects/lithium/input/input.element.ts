import { html, LitElement } from 'lit-element';
import { property, querySlot, registerElementSafely } from 'lithium-ui/common';
import { LithiumInputError } from './input-error.element';
import { LithiumInputMessage } from './input-message.element';
import { styles } from './input.element.css';

let idCount = 0;

/**
 * Input, standard text input with accessibility and error enhancements.
 *
 * @element li-input
 * @slot default - Content slot for modal body
 * @cssprop --color
 * @cssprop --color-error
 * @cssprop --background
 * @cssprop --background-disabled
 * @cssprop --border-color
 * @cssprop --border-radius
 */
// @dynamic
export class LithiumInput extends LitElement {
  /** Set input in an error state */
  @property({ type: Boolean }) error: boolean;

  get input() {
    return this.textInput ? this.textInput : this.textarea ? this.textarea : this.select;
  }

  @querySlot('label') protected label: HTMLLabelElement;
  @querySlot('li-input-message') protected message: LithiumInputMessage;
  @querySlot('li-input-error') protected errorMessage: LithiumInputError;
  @querySlot('input') private textInput: HTMLInputElement;
  @querySlot('textarea') private textarea: HTMLTextAreaElement;
  @querySlot('select') private select: HTMLSelectElement;

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

declare global {
  interface HTMLElementTagNameMap {
    'li-input': LithiumInput;
  }
}
