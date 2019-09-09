import { LitElement, html, property } from 'lit-element';
import '@a11y/focus-trap';

import { registerElementSafely, IntlService, KeyCodes } from 'lithium-ui/common';
import { IconService, closeIcon } from 'lithium-ui/icons';
import { styles } from './modal.element.css';
IconService.addIcons(closeIcon);

/**
 * Modal, to intercept or pause user for a specific blocking task.
 *
 * @noInheritDoc
 * @element `li-modal`
 * @slot `default` - Content slot for modal body
 * @slot `header` - Content slot for modal header
 * @slot `footer` - Content slot for modal footer
 * @customEvent `openChange` - Notify when the modal has been opened or closed.
 * @styleAttr `large` - Set modal size to large breakpoint
 * @cssProp `--li-modal-max-width`
 * @cssProp `--li-modal-max-height`
 */
// @dynamic
export class LithiumModal extends LitElement {
  private focusedElementBeforeOpen: HTMLElement;

  private _open = false;
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

  /** Option to set if modal can be closed by clicking the modal backdrop */
  @property({ type: Boolean }) backdropClosable = true;

  static get styles() {
    return styles;
  }

  protected render() {
    return html`
      ${this.open
        ? html`
            <div class="li-modal-wrapper">
              <div class="li-modal" role="dialog" aria-labelledby="modal-header">
                <focus-trap>
                  <div class="li-modal-header">
                    <slot name="header" id="modal-header"></slot>
                    <button
                      @click="${() => this.closeModal()}"
                      type="button"
                      aria-label="${IntlService.registry.close}"
                      class="li-modal-close-btn"
                    >
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

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('keydown', this.removeOnEscape);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this.removeOnEscape);
  }

  /** Toggles if the modal should be open or closed */
  toggle() {
    this.open = !this.open;
  }

  /** Opens modal regardless of current state */
  openModal() {
    this.open = true;
  }

  /** Close modal regardless of current state */
  closeModal() {
    this.open = false;
  }

  private removeOnEscape = (event: KeyboardEvent) => {
    if ((event.key === KeyCodes.Escape || event.key === 'Esc') && this.open) {
      this.closeModal();
    }
    // tslint:disable-next-line: semicolon
  };

  private backdropClose() {
    if (this.backdropClosable) {
      this.closeModal();
    }
  }

  private openChange() {
    this.dispatchEvent(new CustomEvent('openChange', { detail: this.open }));
  }
}

registerElementSafely('li-modal', LithiumModal);
