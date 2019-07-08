import { LitElement, html, property } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { IconService, closeIcon } from 'lithium-ui/icons';
import { styles } from './side-nav.styles';
IconService.addIcons(closeIcon);

// @dynamic
export class LithiumSideNav extends LitElement {
  @property({ type: Boolean }) open = false;
  @property({ type: Boolean }) sticky = false;
  @property({ type: Boolean }) closeOnInnerClick = true;

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <div .classList=${this.sticky || this.open ? 'li-side-nav-open' : ''}>
        <nav class="li-side-nav">
          ${!this.sticky ? html`
            <div class="li-menu-heading">
              <div class="li-menu-heading-text"><slot name="heading">Menu</slot></div>
              <button aria-label="close menu" @click=${e => this.close()} class="li-menu-close-btn">
                <li-icon name="close"></li-icon>
              </button>
            </div>
          ` : ''}
          <div @click=${() => this.navClose()}>
            <slot class="li-side-nav-slot"></slot>
          </div>
        </nav>
        ${!this.sticky ? html`<div @click=${() => this.close()} class="li-side-nav-backdrop"></div>` : ''}
      </div>
    `;
  }

  close() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('openChange', { detail: this.open }));
  }

  navClose() {
    if (this.closeOnInnerClick && !this.sticky) {
      this.open = false;
      this.dispatchEvent(new CustomEvent('openChange', { detail: this.open }));
    }
  }
}

registerElementSafely('li-side-nav', LithiumSideNav);
