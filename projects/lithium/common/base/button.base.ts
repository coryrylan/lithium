import { html, LitElement, property, query } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';

import { querySlot } from './../decorators/query-slot';
import { AriaRole, KeyCodes } from './../utils/enums';
import { stopEvent } from './../utils/events';

export const hiddenButtonTemplate = (disabled: boolean, value: string, name: string, type: 'button' | 'submit' | 'reset' | 'menu') => html`
  <button
    aria-hidden="true"
    ?disabled="${disabled}"
    tabindex="-1"
    style="display: none"
    value="${ifDefined(value)}"
    name="${ifDefined(name)}"
    type="${ifDefined(type)}"
  ></button>
`;

// @dynamic
export class BaseButton extends LitElement {
  private get isButton() {
    return this.role === AriaRole.Button;
  }

  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String, reflect: true }) type: 'button' | 'submit';
  @property({ type: String, reflect: true }) role = 'button';
  @property({ type: String, reflect: true }) name = '';
  @property({ type: String, reflect: true }) value = '';
  @property({ type: Boolean, reflect: true }) readonly = false;

  @querySlot('a') private anchor: HTMLAnchorElement;
  @query('button') private templateButton: HTMLButtonElement;
  private hiddenButton: HTMLButtonElement;

  connectedCallback() {
    super.connectedCallback();
    this.tabIndex = 0;
    this.addEventListener('click', e => this.onClick(e));
    this.addEventListener('keydown', e => this.onKeyDown(e));
  }

  protected render() {
    return html`
        <slot></slot>
        ${hiddenButtonTemplate(this.disabled, this.value, this.name, this.type)}
    `;
  }

  protected firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.updateButtonAttributes();

    if (!this.anchor) {
      // append the template button to light DOM to interface with forms
      this.hiddenButton = this.appendChild(this.templateButton);
    }
  }

  protected updated(props: Map<string, any>) {
    super.updated(props);
    if (props.has('readonly') || props.has('disabled')) {
      this.updateButtonAttributes();
    }
  }

  protected onClick(event: Event) {
    if (this.disabled || this.readonly) {
      stopEvent(event);
      return;
    }

    if (this.isButton && event.target === this && !event.defaultPrevented) {
      this.hiddenButton.dispatchEvent(new MouseEvent('click', { relatedTarget: this, composed: true }));
    }
  }

  protected onKeyDown(e: KeyboardEvent) {
    if ((this.isButton && e.key === KeyCodes.Enter) || e.code === KeyCodes.Space) {
      this.click();
      stopEvent(e);
    }
  }

  private updateButtonAttributes() {
    const oldRole = this.role;
    const oldTabIndex = this.tabIndex;

    this.style.pointerEvents = this.disabled ? 'none' : '';

    if (this.anchor) {
      this.role = AriaRole.Presentation;
      this.type = null;
      this.removeAttribute('tabindex');
    } else if (this.readonly) {
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
