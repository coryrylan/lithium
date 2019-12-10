import { html, LitElement } from 'lit-element';
import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './card.element.css';

/**
 * Card, to organize and group related content
 *
 * @noInheritDoc
 * @element li-card
 * @slot default - Content slot for card content
 * @slot li-card-header - Content slot for card header
 * @slot li-card-content - Content slot for card content
 * @slot li-card-actions - Content slot for card actions
 * @cssprop --background
 * @cssprop --border-color
 * @cssprop --border-radius
 * @cssprop --color
 * @cssprop --padding
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

registerElementSafely('li-card', LithiumCard);

declare global {
  interface HTMLElementTagNameMap {
    'li-card': LithiumCard;
  }
}
