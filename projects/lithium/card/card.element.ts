import { html, LitElement } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './card.element.css';

/**
 * Card, to organize and group related content
 *
 * @noInheritDoc
 * @element li-card
 * @slot default - Content slot for modal body
 * @slot header - Content slot for modal header
 * @slot footer - Content slot for modal footer
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
      <slot name="footer"></slot>
    `;
  }
}

registerElementSafely('li-card', LithiumCard);
