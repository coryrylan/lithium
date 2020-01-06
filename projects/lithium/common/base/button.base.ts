import { html, LitElement, query } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';

import { property } from './../decorators/property';
import { querySlot } from './../decorators/query-slot';
import { KeyCodes } from './../utils/enums';
import { stopEvent } from './../utils/events';

// @dynamic
export class BaseButton extends LitElement {
  @property({ type: Boolean }) readonly = false;
  @property({ type: String }) role = 'button';
  @property({ type: String }) type: 'button' | 'submit';
  @property({ type: String }) name = '';
  @property({ type: String }) value = '';
  @property({ type: Boolean }) disabled = false;

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
    this.setupNativeButtonBehavior();
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
  private setupNativeButtonBehavior() {
    this.appendHiddenButton();
    this.addEventListener('click', e => this.triggerNativeButtonBehavior(e));
    this.addEventListener('keydown', e => this.emulateKeyBoardEventBehavior(e));
  }

  private triggerNativeButtonBehavior(event: Event) {
    if (!this.readonly) {
      if (this.disabled) {
        stopEvent(event);
      } else if (event.target === this && !event.defaultPrevented) {
        this.hiddenButton.dispatchEvent(new MouseEvent('click', { relatedTarget: this, composed: true }));
      }
    }
  }

  private appendHiddenButton() {
    if (!this.hiddenButton && this.templateButton) {
      this.hiddenButton = this.appendChild(this.templateButton);
    }
  }

  private emulateKeyBoardEventBehavior(e: KeyboardEvent) {
    if (!this.anchor && (e.key === KeyCodes.Enter || e.code === KeyCodes.Space)) {
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
      this.appendHiddenButton();
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
