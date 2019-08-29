import { LitElement, html } from 'lit-element';

import { styles } from './tab.styles';

// @dynamic
export class LithiumTab extends LitElement {
  static get styles() { return styles; }

  render() {
    return html`
      <div class="li-tab-content">
        <slot></slot>
      </div>
    `;
  }
}
