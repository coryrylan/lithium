import { LitElement, html } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './card.element.css';

/**
 * Card, to organize and group related content
 *
 * @noInheritDoc
 * @element `li-card`
 * @slot `default` - Content slot for modal body
 * @slot `header` - Content slot for modal header
 * @slot `footer` - Content slot for modal footer
 * @cssProp `--li-card-background-color`
 * @cssProp `--li-card-border-color`
 * @cssProp `--li-card-border-radius`
 * @cssProp `--li-card-color`
 * @cssProp `--li-card-padding`
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
