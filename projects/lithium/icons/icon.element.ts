import { html, LitElement, property, query } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './icon.element.css';
import { IconService } from './icon.service';
import { unknownIcon } from './svg';

let iconId = 0;

/**
 * Icon
 *
 * @noInheritDoc
 * @element `li-icon`
 * @cssProp `--li-icon-width` - Icon width.
 * @cssProp `--li-icon-height` - Icon height.
 * @cssProp `--li-icon-color` - Icon Color.
 */
// @dynamic
export class LithiumIcon extends LitElement {
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
      <div .innerHTML="${IconService.registry[this.name] ? IconService.registry[this.name] : IconService.registry[unknownIcon.name]}"></div>
      <span id=${'li-icon-id-' + iconId} class="li-sr-only">${this.title}</span>
    `;
  }
}

registerElementSafely('li-icon', LithiumIcon);
