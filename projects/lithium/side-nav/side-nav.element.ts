import { LitElement, html, property } from 'lit-element';

import { registerElementSafely, IntlService } from 'lithium-ui/common';
import { IconService, closeIcon } from 'lithium-ui/icons';
import { styles } from './side-nav.styles';
IconService.addIcons(closeIcon);

/**
 * Side Nav, a slide out nav for navigation menus
 *
 * @noInheritDoc
 * @slot `default` - Content slot for nav elements
 * @customEvent `openChange` - Notify when the side nav has been opened or closed.
 * @styleAttr `sticky` - Set nav to remain open on left side
 * @cssProp `--li-side-nav-top`
 * @cssProp `--li-side-nav-width`
 * @cssProp `--li-side-nav-background-color`
 * @cssProp `--li-side-nav-transition-speed`
 * @cssProp `--li-side-nav-border-color`
 * @cssProp `--li-side-nav-header-background-color`
 * @cssProp `--li-side-nav-color`
 */
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
              <button aria-label="${IntlService.registry.close}" @click=${e => this.close()} class="li-menu-close-btn">
                <li-icon name="close" class="li-menu-close-icon"></li-icon>
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
    this.openChange();
  }

  navClose() {
    if (this.closeOnInnerClick && !this.sticky) {
      this.open = false;
      this.openChange();
    }
  }

  private openChange() {
    this.dispatchEvent(new CustomEvent('openChange', { detail: this.open }));
  }
}

registerElementSafely('li-side-nav', LithiumSideNav);
