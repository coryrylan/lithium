import { LitElement, html, property } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { LithiumTab } from './tab';
import { styles } from './tabs.styles';

// @dynamic
export class LithiumTabs extends LitElement {
  static get styles() { return styles; }

  @property() tabs: LithiumTab[] = [];
  index = 0;

  render() {
    return html`
      <div class="li-tabs">
        <div class="li-tabs-nav">
          ${this.tabs.map((t, i) => html`
            <button className=${this.index === i ? 'active' : ''} @click=${() => this.tabClick(i)}>${t.name}</button>
          `)}
        </div>
        <slot></slot>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.tabs = [].slice.call(this.querySelectorAll('li-tab'));
    this.tabClick(0);
  }

  private tabClick(index: number) {
    this.index = index;
    this.showTab();
  }

  private showTab() {
    this.tabs.forEach(t => t.style.display = 'none');
    this.tabs[this.index].style.display = 'block';
  }
}

registerElementSafely('li-tab', LithiumTab);
registerElementSafely('li-tabs', LithiumTabs);
