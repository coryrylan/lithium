import { LitElement, html, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { registerElementSafely } from 'lithium-ui/common';
import { LithiumTab } from './tab';
import { styles } from './tabs.styles';

/**
 * Tabs, organize related groups into tab panels
 *
 * @noInheritDoc
 * @slot `default` - Content slot for tab panels
 * @customEvent `openChange` - Notify when the modal has been opened or closed.
 * @cssProp `--li-tabs-text-color`
 * @cssProp `--li-tabs-border-color`
 * @cssProp `--li-tabs-button-background-color`
 * @cssProp `--li-tabs-button-selected-border-color`
 */
// @dynamic
export class LithiumTabs extends LitElement {
  static get styles() { return styles; }

  @property() private tabs: LithiumTab[] = [];
  index = 0;

  render() {
    return html`
      <div class="li-tabs">
        <div class="li-tabs-nav">
          ${this.tabs.map((t, i) => html`
            <button class=${this.index === i ? 'active' : ''} @click=${() => this.tabClick(i)}>${t.name}</button>
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
    this.requestUpdate('index');
    this.showTab();
  }

  private showTab() {
    this.tabs.forEach(t => t.style.display = 'none');
    this.tabs[this.index].style.display = 'block';
  }
}

registerElementSafely('li-tab', LithiumTab);
registerElementSafely('li-tabs', LithiumTabs);
