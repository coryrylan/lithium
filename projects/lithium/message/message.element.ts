import { html, LitElement } from 'lit-element';

import { baseStyles, event, EventEmitter, IntlService, property, registerElementSafely } from 'lithium-ui/common';
import 'lithium-ui/icon';
import { checkIcon, closeIcon, errorIcon, IconService, infoIcon, warningIcon } from 'lithium-ui/icon-shapes';
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
 * @cssprop --color
 * @cssprop --background
 * @cssprop --border-radius
 * @cssprop --border
 * @cssprop --padding
 * @cssprop --status-icon-color
 * @cssprop --close-icon-color
 */
// @dynamic
export class LithiumMessage extends LitElement {
  @event() private closeChange: EventEmitter<boolean>;

  /** Set Message Status, see LithiumMessageType enum */
  @property({ type: String }) status = LithiumMessageStatus.Default;

  /** Set if message can be closable */
  @property({ type: Boolean }) closable = true;

  /** Set to close message programmatically */
  @property({ type: Boolean }) close = false;

  static get styles() {
    return [baseStyles, styles];
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
    this.closeChange.emit(this.close);
  }
}

registerElementSafely('li-message', LithiumMessage);

declare global {
  interface HTMLElementTagNameMap {
    'li-message': LithiumMessage;
  }
}
