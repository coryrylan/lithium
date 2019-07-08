import { LitElement, html, property } from 'lit-element';

import { styles } from './tab.styles';

// @dynamic
export class LithiumTab extends LitElement {
  @property({ type: String }) title = '';
  static get styles() { return styles; }

  render() {
    return html`
      <div class="li-tab-content">
        <slot></slot>
      </div>
    `;
  }
}
