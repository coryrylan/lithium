import { LitElement, html, property } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './progress-bar.styles';

/**
 * Progress Bar, display the current state or progress of a running task
 *
 * @noInheritDoc
 * @cssProp `--li-progress-bar-background-color`
 * @cssProp `--li-progress-bar-shadow-color`
 * @cssProp `--li-progress-bar-inset-background-color`
 * @cssProp `--li-progress-bar-color`
 */
// @dynamic
export class LithiumProgressBar extends LitElement {
  /** Current progress value (out of 100) */
  @property({ type: Number }) value = 0;

  /** Display value in progress bar */
  @property({ type: Boolean }) showValue = true;

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <div class="li-progress-bar">
        <div style="transform: translateX(${this.value}%)"
          class="li-progress-bar-inner" role="progressbar" aria-valuenow="${this.value}" aria-valuemin="0" aria-valuemax="100"></div>
        ${this.showValue ? html`<div class="li-progress-bar-value">${this.value}%</div>` : ''}
      </div>
    `;
  }
}

registerElementSafely('li-progress-bar', LithiumProgressBar);
