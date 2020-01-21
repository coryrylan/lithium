import { html, LitElement } from 'lit-element';
import ResizeObserver from 'resize-observer-polyfill';

import { baseStyles, event, EventEmitter, IntlService, property, registerElementSafely } from 'lithium-ui/common';
import 'lithium-ui/icon';
import { closeIcon, IconService } from 'lithium-ui/icon-shapes';
import { styles } from './side-nav.element.css';
IconService.addIcons(closeIcon);

/**
 * Side Nav, a slide out nav for navigation menus
 *
 * @noInheritDoc
 * @element li-side-nav
 * @slot default - Content slot for nav elements
 * @event openChange {boolean} - Notify when the side nav has been opened or closed.
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
  @event() private openChange: EventEmitter<boolean>;

  /** Trigger if nav should be open or closed */
  @property({ type: Boolean }) open = false;

  /** Set nav to remain open on left side */
  @property({ type: Boolean }) sticky = false;

  /** Set a pixel value for viewpoint width to set as sticky */
  @property({ type: Number }) stickyBreakpoint: number;

  /** Auto close nav when inner elements are clicked */
  @property({ type: Boolean }) closeOnInnerClick = true;

  private resizeObserver: ResizeObserver;

  static get styles() {
    return [baseStyles, styles];
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
    this.openChange.emit(this.open);
  }

  /** toggle the open state */
  toggle() {
    this.open = !this.open;
    this.openChange.emit(this.open);
  }

  private navClose() {
    if (this.closeOnInnerClick && !this.sticky) {
      this.open = false;
      this.openChange.emit(this.open);
    }
  }
}

registerElementSafely('li-side-nav', LithiumSideNav);

declare global {
  interface HTMLElementTagNameMap {
    'li-side-nav': LithiumSideNav;
  }
}
