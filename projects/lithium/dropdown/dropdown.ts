import { LitElement, html, property } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './dropdown.styles';

// @dynamic
export class XDropdown extends LitElement {
  @property() visible = false;
  @property() title = 'dropdown';

  static get styles() { return styles; }

  constructor() {
    super();
    this.visible = false;
    this.title = 'dropdown';
  }

  render() {
    return html`
      <div class="dropdown">
        <button @click="${() => this.toggle()}" class="btn">${this.title}</button>
        ${this.visible ?
          html`
            <div>
              <slot></slot>
            </div>`
          : '' }
      </div>
    `;
  }

  toggle() {
    this.visible = !this.visible;
    this.dispatchEvent(new CustomEvent('visibleChange', { detail: this.visible }))
  }
}

registerElementSafely('x-dropdown', XDropdown);
