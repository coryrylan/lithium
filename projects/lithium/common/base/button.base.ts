import { LitElement, html, property } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';

import { AriaRole, KeyCodes } from './../utils/enums';
import { stopEvent } from './../utils/events';

// @dynamic
export class BaseButton extends LitElement {
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String, reflect: true }) type: 'button' | 'submit' = 'submit';
  @property({ type: String, reflect: true }) role = 'button';
  @property({ type: String, reflect: true }) tabindex = '0';
  @property({ type: String, reflect: true }) name: string;
  @property({ type: String, reflect: true }) value: string;

  private $hiddenButton: HTMLButtonElement;

  private get isButton() {
    return this.role === AriaRole.Button;
  }

  private get isAnchor() {
    return this.querySelector('a');
  }

  render() {
    return html`
      <slot></slot>
      <button
        aria-hidden="true"
        ?disabled="${this.disabled}"
        tabindex="-1"
				style="display: none"
				value="${ifDefined(this.value)}"
				name="${ifDefined(this.name)}"
				type="${this.type}">
			</button>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', e => this.onClick(e));
    this.addEventListener('keydown', e => this.onKeyDown(e));
  }

  protected firstUpdated(props) {
    super.firstUpdated(props);

    if (this.isAnchor) {
      this.role = AriaRole.Presentation;
      this.type = null;
      this.tabindex = null;
    } else {
      // append $hiddenButton to light DOM to interface with forms
      this.$hiddenButton = this.shadowRoot.querySelector('button');
      this.appendChild(this.$hiddenButton);
    }
  }

  protected onClick(event: Event) {
    if (this.disabled) {
      stopEvent(event);
      return;
    }

    if (this.isButton && event.target === this && !event.defaultPrevented) {
      this.$hiddenButton.dispatchEvent(new MouseEvent('click', { relatedTarget: this, composed: true }));
    }
  }

  protected onKeyDown(e: KeyboardEvent) {
    if (this.isButton && e.key === KeyCodes.Enter || e.code === KeyCodes.Space) {
      this.click();
      stopEvent(e);
    }
  }
}
