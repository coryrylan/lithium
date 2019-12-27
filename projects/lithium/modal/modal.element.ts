import '@a11y/focus-trap';
import { html, LitElement, property } from 'lit-element';

import { baseStyles, IntlService, KeyCodes, registerElementSafely } from 'lithium-ui/common';
import { IconService } from 'lithium-ui/icon';
import { closeIcon } from 'lithium-ui/icon-shapes';
import { styles } from './modal.element.css';

IconService.addIcons(closeIcon);

/**
 * Modal, to intercept or pause user for a specific blocking task.
 *
 * @noInheritDoc
 * @element li-modal
 * @slot li-modal-content - Content slot for modal body
 * @slot li-modal-header - Content slot for modal header
 * @slot li-modal-actions - Content slot for modal actions
 * @event openChange - Notify when the modal has been opened or closed.
 * @attr {String} large - Set modal size to large breakpoint
 * @cssprop --border
 * @cssprop --background
 * @cssprop --color
 * @cssprop --max-width
 * @cssprop --max-height
 * @cssprop --margin
 * @cssprop --border-radius
 * @cssprop --backdrop-background
 */
// @dynamic
export class LithiumModal extends LitElement {
  static get styles() {
    return [baseStyles, styles];
  }

  get open() {
    return this._open;
  }

  /** Toggle if modal should be open or closed. */
  @property({ type: Boolean })
  set open(value) {
    if (value !== this._open) {
      const old = this._open;
      this._open = value;
      this.requestUpdate('open', old);
      this.openChange();

      if (this._open) {
        this.focusedElementBeforeOpen = document.activeElement as HTMLElement;
      } else {
        this.focusedElementBeforeOpen.focus();
      }
    }
  }

  /** Option to set if modal can be closed by clicking the X or backdrop */
  @property({ type: Boolean }) closable = true;

  /** Option to set if modal can be closed by clicking the modal backdrop */
  @property({ type: Boolean }) backdropClosable = true;

  private focusedElementBeforeOpen: HTMLElement;
  private _open = false;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('keydown', this.removeOnEscape);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this.removeOnEscape);
  }

  protected render() {
    return html`
      ${this.open
        ? html`
            <div class="li-modal-wrapper">
              <div class="li-modal" role="dialog" aria-labelledby="modal-header">
                <focus-trap>
                  <header class="li-modal-header">
                    <slot name="header" id="modal-header"></slot>
                    ${this.closable
                      ? html`
                          <button
                            @click="${() => this.closeModal()}"
                            type="button"
                            aria-label="${IntlService.registry.close}"
                            class="li-modal-close-btn"
                          >
                            <li-icon name="close"></li-icon>
                          </button>
                        `
                      : ''}
                  </header>
                  <section class="li-modal-content">
                    <slot></slot>
                  </section>
                  <footer class="li-modal-actions">
                    <slot name="actions"></slot>
                  </footer>
                </focus-trap>
              </div>
              <div @click="${() => this.backdropClose()}" class="li-modal-backdrop"></div>
            </div>
          `
        : ''}
    `;
  }

  private removeOnEscape = (event: KeyboardEvent) => {
    if ((event.key === KeyCodes.Escape || event.key === 'Esc') && this.open) {
      this.closeModal();
    }
    // tslint:disable-next-line: semicolon
  };

  private backdropClose() {
    if (this.backdropClosable && this.closable) {
      this.closeModal();
    }
  }

  private closeModal() {
    this.open = false;
  }

  private openChange() {
    this.dispatchEvent(new CustomEvent('openChange', { detail: this.open }));
  }
}

registerElementSafely('li-modal', LithiumModal);

declare global {
  interface HTMLElementTagNameMap {
    'li-modal': LithiumModal;
  }
}
