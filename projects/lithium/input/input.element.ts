import { LitElement, html, query } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './input.styles';
import { LithiumInputMessage } from './input-message.element';
import { LithiumInputError } from './input-error.element';

let idCount = 0;

// @dynamic
export class LithiumInput extends LitElement {
  private label: HTMLElement;
  private input: HTMLElement;
  private message: LithiumInputMessage;
  private error: LithiumInputError;

  private inputId = `li-input-id-${idCount++}`;
  private messageId = `li-input-id-${idCount++}`;
  private errorId = `li-input-id-${idCount++}`;

  static get styles() { return styles; }

  render() {
    return html`
      <slot></slot>
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    this.label = this.querySelector('label');
    this.input = this.querySelector('input') ? this.querySelector('input') : this.querySelector('textarea');
    this.message = this.querySelector('li-input-message');
    this.error = this.querySelector('li-input-error');

    this.linkLabelIds();
  }

  private linkLabelIds() {
    this.input.id = this.inputId;
    this.label.setAttribute('for', this.inputId);
    this.input.setAttribute('aria-describedby', `${this.messageId} ${this.errorId}`);

    if (this.message) {
      this.message.id = this.messageId;
    }

    if (this.error) {
      this.error.id = this.errorId;
    }
  }
}

registerElementSafely('li-input', LithiumInput);

export class LithiumTextArea extends LithiumInput { }
registerElementSafely('li-textarea', LithiumTextArea);
