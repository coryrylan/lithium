import { html, LitElement } from 'lit-element';
import { registerElementSafely } from 'lithium-ui/common';
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

registerElementSafely('li-card-header', LithiumCardHeader);

declare global {
  interface HTMLElementTagNameMap {
    'li-card-header': LithiumCardHeader;
  }
}
