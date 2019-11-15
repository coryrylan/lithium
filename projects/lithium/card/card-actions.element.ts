import { html, LitElement } from 'lit-element';

import { styles } from './card-actions.element.css';

export class LithiumCardActions extends LitElement {
  static get styles() {
    return styles;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('slot', 'actions');
  }

  protected render() {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'li-card-actions': LithiumCardActions;
  }
}
