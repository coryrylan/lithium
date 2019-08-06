import { LitElement, html } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './card.styles';

/**
 * Card, to organize and group related content
 *
 * @noInheritDoc
 * @slot `default` - Content slot for modal body
 * @slot `header` - Content slot for modal header
 * @slot `footer` - Content slot for modal footer
 * @cssProp `--li-card-background-color` - Background color for Card.
 * @cssProp `--li-card-border-color` - Border color for Card.
 * @cssProp `--li-card-border-radius` - Border radius for Card.
 * @cssProp `--li-card-color` - Text color for Card.
 * @cssProp `--li-card-padding` - Padding for Card.
 */
// @dynamic
export class LithiumCard extends LitElement {
  static get styles() { return styles; }

  render() {
    return html`
      <slot name="header"></slot>
      <slot></slot>
      <slot name="footer"></slot>
    `;
  }
}

registerElementSafely('li-card', LithiumCard);
