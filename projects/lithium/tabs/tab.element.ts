import { LitElement, html } from 'lit-element';

import { styles } from './tab.element.sass';

// @dynamic
export class LithiumTab extends LitElement {
  static get styles() {
    return styles;
  }

  render() {
    return html`
      <div class="li-tab-content">
        <slot></slot>
      </div>
    `;
  }
}
