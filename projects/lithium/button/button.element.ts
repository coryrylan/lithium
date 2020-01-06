import { html } from 'lit-element';
import { BaseButton, baseStyles, property, registerElementSafely } from 'lithium-ui/common';
import 'lithium-ui/progress';
import { styles } from './button.element.css';

/**
 * Button, action button with multiple states and loading spinner
 *
 * @noInheritDoc
 * @element li-button
 * @slot default - Content slot for button
 * @cssprop --background
 * @cssprop --color
 * @cssprop --border-radius
 * @cssprop --border-color
 */
// @dynamic
export class LithiumButton extends BaseButton {
  /** Loading property to determine if loading spinner should be visible. */
  @property({ type: Boolean }) loading = false;

  /** Set the action type of the button */
  @property({ type: String }) action: 'default' | 'secondary' | 'tertiary';

  /** Set the status color of the button */
  @property({ type: String }) status: 'default' | 'success' | 'warning' | 'danger';

  /** Set the size of the button */
  @property({ type: String }) size: 'default' | 'sm' | 'lg' | 'icon';

  private initialWidth: number;
  private initialMinWidth: string;

  static get styles() {
    return [baseStyles, styles];
  }

  protected render() {
    return html`
      ${this.loading
        ? html`
            <div class="li-progress-wrapper">
              <li-progress circular intermediate></li-progress>
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
