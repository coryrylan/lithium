import { html, LitElement, property } from 'lit-element';

import { IntlService, registerElementSafely } from 'lithium-ui/common';
import { checkIcon, closeIcon, errorIcon, IconService, infoIcon, warningIcon } from 'lithium-ui/icons';
import { styles } from './message.element.css';

IconService.addIcons(infoIcon, errorIcon, warningIcon, checkIcon, closeIcon);

export enum LithiumMessageStatus {
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
 * @attr {String} status - [default|success|warning|danger]
 * @cssprop --li-message-color
 * @cssprop --li-message-background-color
 * @cssprop --li-message-border
 * @cssprop --li-message-border-radius
 * @cssprop --li-message-icon-color
 */
// @dynamic
export class LithiumMessage extends LitElement {
  /** Set Message Status, see LithiumMessageType enum */
  @property({ type: String }) status = LithiumMessageStatus.Default;

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
                ${this.status === LithiumMessageStatus.Default
                  ? html`
                      <li-icon name="info" aria-label="${IntlService.registry.info}"></li-icon>
                    `
                  : ''}
                ${this.status === LithiumMessageStatus.Warning
                  ? html`
                      <li-icon name="warning" aria-label="${IntlService.registry.warning}"></li-icon>
                    `
                  : ''}
                ${this.status === LithiumMessageStatus.Error
                  ? html`
                      <li-icon name="error" aria-label="${IntlService.registry.error}"></li-icon>
                    `
                  : ''}
                ${this.status === LithiumMessageStatus.Success
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
