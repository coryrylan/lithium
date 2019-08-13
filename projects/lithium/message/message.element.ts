import { LitElement, html, property } from 'lit-element';

import { registerElementSafely, IntlService } from 'lithium-ui/common';
import { IconService, infoIcon, errorIcon, warningIcon, checkIcon, closeIcon } from 'lithium-ui/icons';
import { styles } from './message.styles';

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
 * @slot `default` - Content slot for modal body
 * @customEvent `closeChange` - Notify when the message has been dismissed
 * @styleAttr `success` - Display success message
 * @styleAttr `warning` - Display warning message
 * @styleAttr `error` - Display error message
 * @cssProp `--li-message-color`
 * @cssProp `--li-message-background-color`
 * @cssProp `--li-message-border`
 * @cssProp `--li-message-border-radius`
 * @cssProp `--li-message-success-background-color`
 * @cssProp `--li-message-warning-background-color`
 * @cssProp `--li-message-error-background-color`
 * @cssProp `--li-message-success-icon-color`
 * @cssProp `--li-message-warning-icon-color`
 * @cssProp `--li-message-error-icon-color`
 * @cssProp `--li-message-icon-color`
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
      ${this.close ? '' : html`
        <div class="li-message">
          <div class="type-icon">
            ${this.type === LithiumMessageType.Default ? html`<li-icon name="info" aria-label="${IntlService.registry.info}"></li-icon>` : ''}
            ${this.type === LithiumMessageType.Warning ? html`<li-icon name="warning" aria-label="${IntlService.registry.warning}"></li-icon>` : ''}
            ${this.type === LithiumMessageType.Error ? html`<li-icon name="error" aria-label="${IntlService.registry.error}"></li-icon>` : ''}
            ${this.type === LithiumMessageType.Success ? html`<li-icon name="check" aria-label="${IntlService.registry.success}"></li-icon>` : ''}
          </div>
          <slot></slot>

          ${this.closable ? html`
            <button @click="${() => this.closeMessage()}" type="button" class="close-btn" data-dismiss="alert" aria-label="${IntlService.registry.close}">
              <li-icon name="close"></li-icon>
            </button>
          ` : ''}
        </div>
      `}
    `;
  }

  closeMessage() {
    this.close = true;
    this.dispatchEvent(new CustomEvent('closeChange', { detail: this.close }));
  }
}

registerElementSafely('li-message', LithiumMessage);
