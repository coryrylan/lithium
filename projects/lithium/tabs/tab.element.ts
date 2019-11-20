import { html, LitElement } from 'lit-element';
import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './tab.element.css';

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

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'tabpanel');
  }
}

registerElementSafely('li-tab', LithiumTab);

declare global {
  interface HTMLElementTagNameMap {
    'li-tab': LithiumTab;
  }
}
