import { html, LitElement } from 'lit-element';

import { styles } from './card-header.element.css';

export class LithiumCardHeader extends LitElement {
  static get styles() {
    return styles;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('slot', 'header');
  }

  protected render() {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'li-card-header': LithiumCardHeader;
  }
}
