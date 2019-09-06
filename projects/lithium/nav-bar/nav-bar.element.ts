import { LitElement, html } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './nav-bar.element.sass';

/**
 * Nav Bar, standard navigation bar with basic layout
 *
 * @noInheritDoc
 * @element `li-nav-bar`
 * @slot `default` - Content slot for nav bar
 * @styleAttr `sticky` - Make nav bar sticky and position to top of page
 * @styleAttr `li-nav-bar-right` - Align nav links to right
 * @cssProp `--li-nav-bar-background-color`
 * @cssProp `--li-nav-bar-color`
 * @cssProp `--li-nav-bar-hover-background-color`
 */
// @dynamic
export class LithiumNavBar extends LitElement {
  static get styles() {
    return styles;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

registerElementSafely('li-nav-bar', LithiumNavBar);
