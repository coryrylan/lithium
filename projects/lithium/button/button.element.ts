import { html, property } from 'lit-element';
import { BaseButton, registerElementSafely } from 'lithium-ui/common';
import 'lithium-ui/loading-spinner';
import { styles } from './button.element.css';

/**
 * Button, action button with multiple states and loading spinner
 *
 * @noInheritDoc
 * @element li-button
 * @slot default - Content slot for button
 * @attr {String} action - [default|secondary|tertiary]
 * @attr {String} status - [default|success|warning|danger]
 * @attr {String} size - [sm|default|lg|icon]
 * @cssprop --background-color
 * @cssprop --color
 * @cssprop --border-radius
 * @cssprop --border-color
 */
// @dynamic
export class LithiumButton extends BaseButton {
  /** Loading property to determine if loading spinner should be visible. */
  @property({ type: Boolean, reflect: true }) loading = false;
  private initialWidth: number;
  private initialMinWidth: string;

  static get styles() {
    return styles;
  }

  protected render() {
    return html`
      ${this.loading
        ? html`
            <div class="li-loading-spinner-wrapper">
              <li-loading-spinner size="sm"></li-loading-spinner>
            </div>
          `
        : html`
            <slot></slot>
          `}
      ${this.hiddenButtonTemplate}
    `;
  }

  protected firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.initialWidth = this.getBoundingClientRect().width;
    this.initialMinWidth = this.style.minWidth;
  }

  protected updated(props: Map<string, any>) {
    super.updated(props);

    if (this.loading) {
      this.style.minWidth = `${this.initialWidth}px`;
    } else if (!props.get('loading')) {
      this.style.minWidth = this.initialMinWidth;
    }
  }
}

registerElementSafely('li-button', LithiumButton);

declare global {
  interface HTMLElementTagNameMap {
    'li-button': LithiumButton;
  }
}
