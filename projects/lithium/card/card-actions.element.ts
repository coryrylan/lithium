import { html, LitElement } from 'lit-element';
import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './card-actions.element.css';

/**
 * Card Actions
 *
 * @noInheritDoc
 * @element li-card-actions
 * @slot default - Content slot for card actions and buttons
 */
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

registerElementSafely('li-card-actions', LithiumCardActions);

declare global {
  interface HTMLElementTagNameMap {
    'li-card-actions': LithiumCardActions;
  }
}
