import { LitElement, html, property } from 'lit-element';
import '@a11y/focus-trap';

import { registerElementSafely } from 'lithium-ui/common';
import { IconService, closeIcon } from 'lithium-ui/icons';
import { styles } from './modal.styles';
IconService.addIcons(closeIcon);

/**
 * Modal, to intercept or pause user for a specific blocking task.
 *
 * @noInheritDoc
 * @slot `default` - Content slot for modal body
 * @slot `header` - Content slot for modal header
 * @slot `footer` - Content slot for modal footer
 * @cssprop `--max-width` - Max container width.
 * @cssprop `--max-height` - Max container height.
 * @customEvent `openChange` - Notify when the modal has been opened or closed.
 */
// @dynamic
export class LithiumModal extends LitElement {
  /** Toggle if modal should be open or closed. */
  @property({ type: Boolean }) open = false;

  /** Option to set if modal can be closed by clicking the. */
  @property({ type: Boolean }) backdropClosable = true;

  static get styles() {
    return styles;
  }

  protected render() {
    return html`
      ${this.open
        ? html`
          <div class="li-modal-wrapper">
            <div class="li-modal" role="dialog">
              <focus-trap>
                <div class="li-modal-header">
                  <slot name="header"></slot>
                  <button @click="${() => this.close()}" type="button" aria-label="close modal" class="li-modal-close-btn">
                    <li-icon name="close"></li-icon>
                  </button>
                </div>
                <div class="li-modal-content">
                  <slot></slot>
                </div>
                <div class="li-modal-footer">
                  <slot name="footer"></slot>
                </div>
              </focus-trap>
            </div>
            <div @click="${() => this.backdropClose()}" class="li-modal-backdrop"></div>
          </div>
          `
        : ''}
    `;
  }

  /** Toggles if the modal should be open or closed */
  toggle() {
    this.open = !this.open;
    this.openChange();
  }

  protected updated(changedProperties: Map<string, any>) {
    if (this.open && this.open !== changedProperties.get('open')) {
      // setup focus trap
    }
  }

  private close() {
    this.open = !this.open;
    this.openChange();
  }

  private backdropClose() {
    if (this.backdropClosable) {
      this.close();
      this.openChange();
    }
  }

  private openChange() {
    this.dispatchEvent(new CustomEvent('openChange', { detail: this.open }));
  }
}

registerElementSafely('li-modal', LithiumModal);
