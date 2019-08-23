import { LitElement, html, property } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './dropdown.styles';

// @dynamic
export class XDropdown extends LitElement {
  @property({ type: Boolean }) visible = false;
  @property({ type: String }) title = 'dropdown';

  static get styles() { return styles; }

  render() {
    return html`
      <div class="dropdown">
        <button @click="${() => this.toggle()}" class="btn">${this.title}</button>
        ${this.visible ?
          html`
            <div>
              <slot class="x-dropdown-slot"></slot>
            </div>`
          : '' }
      </div>
    `;
  }

  toggle() {
    this.visible = !this.visible;
    this.dispatchEvent(new CustomEvent('visibleChange', { detail: this.visible }));
  }
}

registerElementSafely('x-dropdown', XDropdown);
