import { html, property } from 'lit-element';
import { BaseButton, hiddenButtonTemplate, registerElementSafely } from 'lithium-ui/common';
import 'lithium-ui/loading-spinner';
import { LithiumButtonGroup } from './button-group.element';
import { styles } from './button.element.css';

/**
 * Button, action button with multiple states and loading spinner
 *
 * @noInheritDoc
 * @element li-button
 * @slot default - Content slot for button
 * @attr {String} action - [default|secondary|tertiary|success|warning|danger]
 * @attr {String} size - [small|default|large]
 * @cssprop --li-button-background-color
 * @cssprop --li-button-color
 * @cssprop --li-button-border-radius
 * @cssprop --li-button-disabled-background
 * @cssprop --li-button-secondary-color
 * @cssprop --li-button-secondary-border-color
 * @cssprop --li-button-secondary-hover-background-color
 * @cssprop --li-button-secondary-hover-color
 * @cssprop --li-button-success-color
 * @cssprop --li-button-warning-color
 * @cssprop --li-button-danger-color
 */
// @dynamic
export class LithiumButton extends BaseButton {
  /** Loading property to determine if loading spinner should be visible. */
  @property({ type: Boolean, reflect: true }) loading = false;
  private initialWidth: number;

  static get styles() {
    return styles;
  }

  protected render() {
    return html`
      ${this.loading
        ? html`
            <div class="li-loading-spinner-wrapper">
              <li-loading-spinner small></li-loading-spinner>
            </div>
          `
        : html`
            <slot></slot>
          `}
      ${hiddenButtonTemplate(this.disabled, this.value, this.name, this.type)}
    `;
  }

  protected firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.initialWidth = this.getBoundingClientRect().width;
  }

  protected updated(props: Map<string, any>) {
    super.updated(props);

    if (this.loading) {
      this.style.minWidth = `${this.initialWidth}px`;
    } else if (!props.get('loading')) {
      this.style.minWidth = 'initial';
    }
  }
}

registerElementSafely('li-button', LithiumButton);
registerElementSafely('li-button-group', LithiumButtonGroup);

declare global {
  interface HTMLElementTagNameMap {
    'li-button': LithiumButton;
    'li-button-group': LithiumButtonGroup;
  }
}
