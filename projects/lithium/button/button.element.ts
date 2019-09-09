import { html, property } from 'lit-element';
import { registerElementSafely, BaseButton, hiddenButtonTemplate } from 'lithium-ui/common';
import { styles } from './button.element.css';
import 'lithium-ui/loading-spinner';

/**
 * Button, action button with multiple states and loading spinner
 *
 * @noInheritDoc
 * @element `li-button`
 * @slot `default` - Content slot for modal body
 * @slot `header` - Content slot for modal header
 * @slot `footer` - Content slot for modal footer
 * @styleAttr `outline` - Apply outline style.
 * @styleAttr `flat` - Apply flat style.
 * @styleAttr `success` - Apply success style.
 * @styleAttr `warning` - Apply warning style.
 * @styleAttr `danger` - Apply danger style.
 * @styleAttr `small` - Apply small button style
 * @styleAttr `large` - Apply large button style
 * @cssProp `--li-button-background-color`
 * @cssProp `--li-button-color`
 * @cssProp `--li-button-border-radius`
 * @cssProp `--li-button-disabled-background`
 * @cssProp `--li-button-outline-color`
 * @cssProp `--li-button-outline-border-color`
 * @cssProp `--li-button-outline-hover-background-color`
 * @cssProp `--li-button-outline-hover-color`
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
            <li-loading-spinner small></li-loading-spinner>
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
