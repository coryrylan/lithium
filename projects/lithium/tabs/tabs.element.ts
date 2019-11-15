import { html, LitElement, queryAll } from 'lit-element';

import { querySlotAll, registerElementSafely } from 'lithium-ui/common';
import { LithiumTabTitle } from './tab-title.element';
import { LithiumTab } from './tab.element';
import { styles } from './tabs.element.css';

let id = 0;

/**
 * Tabs, organize related groups into tab panels
 *
 * @noInheritDoc
 * @element li-tabs
 * @slot default - Content slot for tab panels
 * @event openChange - Notify when the modal has been opened or closed.
 * @cssprop --li-tabs-text-color
 * @cssprop --li-tabs-border-color
 * @cssprop --li-tabs-button-background-color
 * @cssprop --li-tabs-button-selected-border-color
 */
// @dynamic
export class LithiumTabs extends LitElement {
  static get styles() {
    return styles;
  }

  @queryAll('button')
  private tabTitleButtons: HTMLButtonElement[];

  @querySlotAll('li-tab') private tabs: NodeListOf<LithiumTab>;
  @querySlotAll('li-tab-title') private tabTitles: NodeListOf<LithiumTabTitle>;
  private index = 0;

  private _id = id++;

  render() {
    return html`
      <div class="li-tabs">
        <div class="li-tabs-nav" role="tablist">
          ${Array.from(this.tabs).map(
            (_t, i) => html`
              <button
                id=${`li-tab-button-${i}-${this._id}`}
                class=${this.index === i ? 'active' : ''}
                @click=${() => this.selectTab(i)}
                role="tab"
              >
                <slot name=${`slot-${i}-${this._id}`}></slot>
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
    this.initializeTabTitles();
    this.initializeTabPanels();

    this.shadowRoot.addEventListener('slotchange', () => {
      this.initializeTabTitles();
      this.initializeTabPanels();
    });
  }

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.initializeTabButtons();
    this.selectTab(0);
  }

  private initializeTabButtons() {
    this.tabTitleButtons.forEach(b => b.setAttribute('aria-selected', 'false'));
    this.tabTitleButtons[0].setAttribute('aria-selected', 'true');
  }

  private initializeTabTitles() {
    this.tabTitles.forEach((t, i) => t.setAttribute('slot', `slot-${i}-${this._id}`));
  }

  private initializeTabPanels() {
    if (this.tabs && this.tabs.length) {
      this.tabs.forEach((t, i) => {
        t.setAttribute('aria-hidden', 'true');
        t.setAttribute('aria-labelledby', `li-tab-button-${i}-${this._id}`);
      });
      this.tabs[0].removeAttribute('aria-hidden');
    }
  }

  private selectTab(tabIndex: number) {
    this.index = tabIndex;
    this.requestUpdate('index');

    this.tabs.forEach(t => t.setAttribute('aria-hidden', 'true'));
    this.tabs[this.index].removeAttribute('aria-hidden');

    this.tabTitleButtons.forEach(t => t.setAttribute('aria-selected', 'false'));
    this.tabTitleButtons[this.index].setAttribute('aria-selected', 'true');
  }
}

registerElementSafely('li-tab-title', LithiumTabTitle);
registerElementSafely('li-tab', LithiumTab);
registerElementSafely('li-tabs', LithiumTabs);

declare global {
  interface HTMLElementTagNameMap {
    'li-tab-title': LithiumTabTitle;
    'li-tab': LithiumTab;
    'li-tabs': LithiumTabs;
  }
}
