import { html, LitElement, property, query } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';

import { querySlot } from '../decorators/query-slot';
import { KeyCodes } from './../utils/enums';
import { stopEvent } from './../utils/events';

// @dynamic
export class BaseButton extends LitElement {
  @property({ type: Boolean, reflect: true }) readonly = false;
  @property({ type: String, reflect: true }) role = 'button';
  @property({ type: String, reflect: true }) type: 'button' | 'submit';
  @property({ type: String, reflect: true }) name = '';
  @property({ type: String, reflect: true }) value = '';
  @property({ type: Boolean, reflect: true }) disabled = false;

  @query('button') private templateButton: HTMLButtonElement;
  @querySlot('a') private anchor: HTMLAnchorElement;

  private hiddenButton: HTMLButtonElement;

  protected get hiddenButtonTemplate() {
    return this.readonly
      ? html``
      : html`
          <button
            aria-hidden="true"
            ?disabled="${this.disabled}"
            tabindex="-1"
            style="display: none"
            value="${ifDefined(this.value)}"
            name="${ifDefined(name)}"
            type="${ifDefined(this.type)}"
          ></button>
        `;
  }

  protected render() {
    return html`
      <slot></slot>
      ${this.hiddenButtonTemplate}
    `;
  }

  protected firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.updateButtonAttributes();
    this.setHiddenButton();
    this.setEventListeners();
  }

  protected updated(props: Map<string, any>) {
    super.updated(props);
    if (props.has('readonly') || props.has('disabled')) {
      this.updateButtonAttributes();
    }
  }

  /**
   * We have to append a hidden button outside the web component in the light DOM
   * This allows us to trigger native submit events within a form element.
   */
  private setHiddenButton() {
    if (!this.readonly) {
      this.hiddenButton = this.appendChild(this.templateButton);
    }
  }

  private setEventListeners() {
    if (!this.readonly) {
      this.addEventListener('click', e => {
        this.preventClickIfDisabled(e);
        this.triggerHiddenFormButton(e);
      });
      this.addEventListener('keydown', e => this.emulateKeyBoardEventBehavior(e));
    }
  }

  private preventClickIfDisabled(event: Event) {
    if (this.disabled) {
      stopEvent(event);
      return;
    }
  }

  private triggerHiddenFormButton(event: Event) {
    if (!this.readonly && !this.disabled && event.target === this && !event.defaultPrevented) {
      this.hiddenButton.dispatchEvent(new MouseEvent('click', { relatedTarget: this, composed: true }));
    }
  }

  private emulateKeyBoardEventBehavior(e: KeyboardEvent) {
    if (e.key === KeyCodes.Enter || e.code === KeyCodes.Space) {
      this.click();
      stopEvent(e);
    }
  }

  private updateButtonAttributes() {
    const oldRole = this.role;
    const oldTabIndex = this.tabIndex;

    if (this.anchor) {
      this.readonly = true;
      this.setAttribute('is-anchor', '');
    }

    if (this.readonly) {
      this.removeAttribute('role');
      this.removeAttribute('tabIndex');
    } else {
      this.role = 'button';
      this.tabIndex = this.disabled ? -1 : 0;
    }

    if (this.role !== oldRole) {
      this.requestUpdate('role', oldRole);
    }

    if (this.tabIndex !== oldTabIndex) {
      this.requestUpdate('tabIndex', oldTabIndex);
    }
  }
}
