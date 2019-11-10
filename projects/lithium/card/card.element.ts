import { html, LitElement } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './card.element.css';

/**
 * Card, to organize and group related content
 *
 * @noInheritDoc
 * @element li-card
 * @slot default - Content slot for modal body
 * @slot card-header - Content slot for card header
 * @slot card-content - Content slot for card content
 * @slot card-actions - Content slot for card actions
 * @cssprop --li-card-background-color
 * @cssprop --li-card-border-color
 * @cssprop --li-card-border-radius
 * @cssprop --li-card-color
 * @cssprop --li-card-padding
 */
// @dynamic
export class LithiumCard extends LitElement {
  static get styles() {
    return styles;
  }

  render() {
    return html`
      <slot name="header"></slot>
      <slot></slot>
      <slot name="actions"></slot>
    `;
  }
}

export class LithiumCardHeader extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('slot', 'header');
  }

  protected render() {
    return html`
      <slot></slot>
    `;
  }
}

export class LithiumCardContent extends LitElement {
  protected render() {
    return html`
      <slot></slot>
    `;
  }
}

export class LithiumCardActions extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('slot', 'actions');
  }

  protected render() {
    return html`
      <slot></slot>
    `;
  }
}

registerElementSafely('li-card', LithiumCard);
registerElementSafely('li-card-header', LithiumCardHeader);
registerElementSafely('li-card-content', LithiumCardContent);
registerElementSafely('li-card-actions', LithiumCardActions);

declare global {
  interface HTMLElementTagNameMap {
    'li-card': LithiumCard;
    'li-card-header': LithiumCardHeader;
    'li-card-content': LithiumCardHeader;
    'li-card-footer': LithiumCardActions;
  }
}
