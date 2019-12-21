import { html, LitElement, property, query } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './icon.element.css';
import { unknownIcon } from './svg';

let iconId = 0;

/**
 * Icon
 *
 * @noInheritDoc
 * @element li-icon
 * @cssprop --color
 * @cssprop --width
 * @cssprop --height
 */
// @dynamic
export class LithiumIcon extends LitElement {
  private static registry: any = {};

  /** Name of Icon to be displayed. */
  @property() name = 'unknown';

  /** Title to provide text for screen reader users */
  @property() title = 'unknown';

  @query('svg') private svg: SVGElement;

  static get styles() {
    return styles;
  }

  connectedCallback() {
    super.connectedCallback();
    iconId++;
    this.setAttribute('role', 'none');
    this.updateSVGAttributes();
  }

  async updateSVGAttributes() {
    await this.updateComplete;
    this.svg.setAttribute('role', 'img');
    this.svg.setAttribute('aria-labelledby', `li-icon-id-${iconId}`);
  }

  render() {
    return html`
      <div .innerHTML="${LithiumIcon.registry[this.name] ? LithiumIcon.registry[this.name] : LithiumIcon.registry[unknownIcon.name]}"></div>
      <span id=${'li-icon-id-' + iconId} class="li-sr-only">${this.title}</span>
    `;
  }
}

registerElementSafely('li-icon', LithiumIcon);

// declare global {
//   interface HTMLElementTagNameMap {
//     'li-icon': LithiumIcon;
//   }
// }
