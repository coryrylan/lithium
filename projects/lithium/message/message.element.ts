import { html, LitElement, property } from 'lit-element';

import { IntlService, registerElementSafely } from 'lithium-ui/common';
import { checkIcon, closeIcon, errorIcon, IconService, infoIcon, warningIcon } from 'lithium-ui/icons';
import { styles } from './message.element.css';

IconService.addIcons(infoIcon, errorIcon, warningIcon, checkIcon, closeIcon);

export enum LithiumMessageType {
  Default = 'default',
  Warning = 'warning',
  Error = 'error',
  Success = 'success'
}

/**
 * Message, display messages to user with varying importance.
 *
 * @noInheritDoc
 * @element li-message
 * @slot default - Content slot for modal body
 * @event closeChange - Notify when the message has been dismissed
 * @attr {String} success - Display success message
 * @attr {String} warning - Display warning message
 * @attr {String} error - Display error message
 * @cssprop --li-message-color
 * @cssprop --li-message-background-color
 * @cssprop --li-message-border
 * @cssprop --li-message-border-radius
 * @cssprop --li-message-success-background-color
 * @cssprop --li-message-warning-background-color
 * @cssprop --li-message-error-background-color
 * @cssprop --li-message-success-icon-color
 * @cssprop --li-message-warning-icon-color
 * @cssprop --li-message-error-icon-color
 * @cssprop --li-message-icon-color
 */
// @dynamic
export class LithiumMessage extends LitElement {
  /** Set Message Type, see LithiumMessageType enum */
  @property({ type: String }) type = LithiumMessageType.Default;

  /** Set if message can be closable */
  @property({ type: Boolean, reflect: true }) closable = false;

  /** Set to close message programmatically */
  @property({ type: Boolean, reflect: true }) close = false;

  static get styles() {
    return styles;
  }

  render() {
    return html`
      ${this.close
        ? ''
        : html`
            <div class="li-message">
              <div class="li-type-icon">
                ${this.type === LithiumMessageType.Default
                  ? html`
                      <li-icon name="info" aria-label="${IntlService.registry.info}"></li-icon>
                    `
                  : ''}
                ${this.type === LithiumMessageType.Warning
                  ? html`
                      <li-icon name="warning" aria-label="${IntlService.registry.warning}"></li-icon>
                    `
                  : ''}
                ${this.type === LithiumMessageType.Error
                  ? html`
                      <li-icon name="error" aria-label="${IntlService.registry.error}"></li-icon>
                    `
                  : ''}
                ${this.type === LithiumMessageType.Success
                  ? html`
                      <li-icon name="check" aria-label="${IntlService.registry.success}"></li-icon>
                    `
                  : ''}
              </div>
              <slot></slot>

              ${this.closable
                ? html`
                    <button
                      @click="${() => this.closeMessage()}"
                      type="button"
                      class="li-close-btn"
                      data-dismiss="alert"
                      aria-label="${IntlService.registry.close}"
                    >
                      <li-icon name="close"></li-icon>
                    </button>
                  `
                : ''}
            </div>
          `}
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('aria-live', 'polite');
  }

  closeMessage() {
    this.close = true;
    this.dispatchEvent(new CustomEvent('closeChange', { detail: this.close }));
  }
}

registerElementSafely('li-message', LithiumMessage);

declare global {
  interface HTMLElementTagNameMap {
    'li-message': LithiumMessage;
  }
}
