import { LitElement, html, property } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './dropdown.element.css';

// test component, not for production
// @dynamic
export class XDropdown extends LitElement {
  private _open = false;
  get open() {
    return this._open;
  }

  @property({ type: Boolean })
  set open(value) {
    if (value !== this._open) {
      const old = this._open;
      this._open = value;
      this.requestUpdate('open', old);
      this.openChange();
    }
  }

  @property({ type: String })
  title = 'dropdown';

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <div class="dropdown">
        <button @click="${() => this.toggle()}" class="btn">${this.title}</button>
        ${this.open
          ? html`
              <div>
                <slot></slot>
              </div>
            `
          : ''}
      </div>
    `;
  }

  toggle() {
    this.open = !this.open;
  }

  private openChange() {
    this.dispatchEvent(new CustomEvent('openChange', { detail: this.open }));
  }
}

registerElementSafely('x-dropdown', XDropdown);
