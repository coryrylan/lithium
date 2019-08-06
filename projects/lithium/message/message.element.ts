import { LitElement, html, property } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { IconService, infoIcon, errorIcon, warningIcon, checkIcon } from 'lithium-ui/icons';
import { styles } from './message.styles';

IconService.addIcons(infoIcon, errorIcon, warningIcon, checkIcon);

export enum LithiumMessageType {
  Default = 'default',
  Warning = 'warning',
  Error = 'error',
  Success = 'success'
}

// @dynamic
export class LithiumMessage extends LitElement {
  @property() type = LithiumMessageType.Default;

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <div>
        ${this.type === LithiumMessageType.Default ? html`<li-icon name="info" aria-label="info"></li-icon>` : ''}
        ${this.type === LithiumMessageType.Warning ? html`<li-icon name="warning" aria-label="warning"></li-icon>` : ''}
        ${this.type === LithiumMessageType.Error ? html`<li-icon name="error" aria-label="error"></li-icon>` : ''}
        ${this.type === LithiumMessageType.Success ? html`<li-icon name="check" aria-label="success"></li-icon>` : ''}
        <slot></slot>
      </div>
    `;
  }
}

registerElementSafely('li-message', LithiumMessage);
