import { html, LitElement, property } from 'lit-element';
import ResizeObserver from 'resize-observer-polyfill';

import { IntlService, registerElementSafely } from 'lithium-ui/common';
import { closeIcon, IconService } from 'lithium-ui/icons';
import { styles } from './side-nav.element.css';
IconService.addIcons(closeIcon);

/**
 * Side Nav, a slide out nav for navigation menus
 *
 * @noInheritDoc
 * @element li-side-nav
 * @slot default - Content slot for nav elements
 * @event openChange - Notify when the side nav has been opened or closed.
 * @attr {String} sticky - Set nav to remain open on left side
 * @cssprop --top
 * @cssprop --width
 * @cssprop --color
 * @cssprop --background
 * @cssprop --background-hover
 * @cssprop --transition
 * @cssprop --border-right
 * @cssprop --heading-background
 * @cssprop --heading-color
 * @cssprop --backdrop-transition
 * @cssprop --backdrop-background
 */
// @dynamic
export class LithiumSideNav extends LitElement {
  @property({ type: Boolean }) open = false;
  @property({ type: Boolean, reflect: true }) sticky = false;
  @property({ type: Number }) stickyBreakpoint: number;
  @property({ type: Boolean }) closeOnInnerClick = true;

  private resizeObserver: ResizeObserver;

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <div .classList=${this.sticky || this.open ? 'li-side-nav-open' : ''}>
        <nav class="li-side-nav">
          ${!this.sticky
            ? html`
                <div class="li-menu-heading">
                  <div class="li-menu-heading-text"><slot name="heading">${IntlService.registry.menu}</slot></div>
                  <button aria-label="${IntlService.registry.close}" @click=${() => this.close()} class="li-menu-close-btn">
                    <li-icon name="close" class="li-menu-close-icon"></li-icon>
                  </button>
                </div>
              `
            : ''}
          <div class="li-inner-nav" @click=${() => this.navClose()}>
            <slot class="li-side-nav-slot"></slot>
          </div>
        </nav>
        ${!this.sticky
          ? html`
              <div @click=${() => this.close()} class="li-side-nav-backdrop"></div>
            `
          : ''}
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    this.resizeObserver = new ResizeObserver(entries => (this.sticky = entries[0].contentRect.width > this.stickyBreakpoint));
    this.resizeObserver.observe(document.body);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver.unobserve(document.body);
  }

  /** close side nav */
  close() {
    this.open = false;
    this.openChange();
  }

  /** toggle the open state */
  toggle() {
    this.open = !this.open;
    this.openChange();
  }

  private navClose() {
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

declare global {
  interface HTMLElementTagNameMap {
    'li-side-nav': LithiumSideNav;
  }
}
