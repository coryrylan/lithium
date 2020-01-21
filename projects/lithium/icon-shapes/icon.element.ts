import { html, LitElement, query } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { baseStyles, property } from 'lithium-ui/common';
import { unknownIcon } from './svg';

import { styles } from './icon.element.css';
import { IconService } from './icon.service';

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
export class LithiumIcon extends LitElement {
  /** Name of Icon to be displayed. */
  @property({ type: String }) name = 'unknown';

  /** Title to provide text for screen reader users */
  @property({ type: String }) title: string;

  @query('svg') private svg: SVGElement;

  static get styles() {
    return [baseStyles, styles];
  }

  private ariaLabel = `${'li-icon-id-' + iconId}`;

  connectedCallback() {
    super.connectedCallback();
    iconId++;
    this.setAttribute('role', 'none');
  }

  firstUpdated() {
    this.svg.setAttribute('role', 'img');
    this.updateSVGAriaLabel();
  }

  updated(props: Map<string, any>) {
    if (props.has('title')) {
      this.updateSVGAriaLabel();
    }
  }

  render() {
    return html`
      ${unsafeHTML(IconService.registry[this.name] ? IconService.registry[this.name] : IconService.registry[unknownIcon.name])}
      ${this.title
        ? html`
            <span id=${this.ariaLabel} class="li-sr-only">${this.title}</span>
          `
        : ''}
    `;
  }

  private updateSVGAriaLabel() {
    if (this.title) {
      this.svg.setAttribute('aria-labelledby', this.ariaLabel); // use labelledby for better SR support
    } else {
      this.svg.removeAttribute('aria-labelledby');
    }
  }
}
