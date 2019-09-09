import { LitElement, html, property } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { LithiumTab } from './tab.element';
import { styles } from './tabs.element.css';
import { LithiumTabTitle } from './tab-title.element';

/**
 * Tabs, organize related groups into tab panels
 *
 * @noInheritDoc
 * @element `li-tabs`
 * @slot `default` - Content slot for tab panels
 * @customEvent `openChange` - Notify when the modal has been opened or closed.
 * @cssProp `--li-tabs-text-color`
 * @cssProp `--li-tabs-border-color`
 * @cssProp `--li-tabs-button-background-color`
 * @cssProp `--li-tabs-button-selected-border-color`
 */
// @dynamic
export class LithiumTabs extends LitElement {
  static get styles() {
    return styles;
  }

  @property() private tabs: LithiumTab[] = [];
  private tabTitles: HTMLElement[] = [];
  private index = 0;

  render() {
    return html`
      <div class="li-tabs">
        <div class="li-tabs-nav">
          ${this.tabs.map(
            (t, i) => html`
              <button class=${this.index === i ? 'active' : ''} @click=${() => this.tabClick(i)}>
                <slot name=${`slot-${i}`}></slot>
              </button>
            `
          )}
        </div>
        <slot></slot>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.tabs = [].slice.call(this.querySelectorAll('li-tab'));
    this.tabTitles = [].slice.call(this.querySelectorAll('li-tab-title'));
    this.tabClick(0);

    this.tabTitles.forEach((t, i) => t.setAttribute('slot', `slot-${i}`));
  }

  private tabClick(index: number) {
    this.index = index;
    this.requestUpdate('index');
    this.showTab();
  }

  private showTab() {
    this.tabs.forEach(t => (t.style.display = 'none'));
    this.tabs[this.index].style.display = 'block';
  }
}

registerElementSafely('li-tab-title', LithiumTabTitle);
registerElementSafely('li-tab', LithiumTab);
registerElementSafely('li-tabs', LithiumTabs);
