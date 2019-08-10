import { html, property } from 'lit-element';
import { registerElementSafely, BaseButton, hiddenButtonTemplate } from 'lithium-ui/common';
import { styles } from './button.styles';
import 'lithium-ui/loading-spinner';

// @dynamic
export class LithiumButton extends BaseButton {
  @property({ type: Boolean, reflect: true }) loading = false;
  private initialWidth: number;

  static get styles() { return styles; }

  render() {
    return html`
      ${this.loading ? html`<li-loading-spinner small></li-loading-spinner>` : html`<slot></slot>`}
      ${hiddenButtonTemplate(this.disabled, this.value, this.name, this.type)}
    `;
  }

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.initialWidth = this.getBoundingClientRect().width;
  }

  protected updated(changedProps) {
    super.updated(changedProps);

    if (this.loading) {
      this.style.minWidth = `${this.initialWidth}px`;
    } else if (!changedProps.get('loading')) {
      this.style.minWidth = 'initial';
    }
  }
}

registerElementSafely('li-button', LithiumButton);
