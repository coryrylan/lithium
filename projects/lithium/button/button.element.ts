import { html, property } from 'lit-element';
import { BaseButton, hiddenButtonTemplate, registerElementSafely } from 'lithium-ui/common';
import 'lithium-ui/loading-spinner';
import { LithiumButtonGroup } from './button-group.element';
import { styles } from './button.element.css';

/**
 * Button, action button with multiple states and loading spinner
 *
 * @noInheritDoc
 * @element `li-button`
 * @slot `default` - Content slot for modal body
 * @slot `header` - Content slot for modal header
 * @slot `footer` - Content slot for modal footer
 * @styleAttr `action` [default|secondary|tertiary|success|warning|danger]
 * @styleAttr `size` - [small|default|large]
 * @cssProp `--li-button-background-color`
 * @cssProp `--li-button-color`
 * @cssProp `--li-button-border-radius`
 * @cssProp `--li-button-disabled-background`
 * @cssProp `--li-button-secondary-color`
 * @cssProp `--li-button-secondary-border-color`
 * @cssProp `--li-button-secondary-hover-background-color`
 * @cssProp `--li-button-secondary-hover-color`
 * @cssProp `--li-button-success-color`
 * @cssProp `--li-button-warning-color`
 * @cssProp `--li-button-danger-color`
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
