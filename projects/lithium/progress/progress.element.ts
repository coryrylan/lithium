import { html, LitElement, property } from 'lit-element';

import { baseStyles, registerElementSafely } from 'lithium-ui/common';
import { styles } from './progress.element.css';

/**
 * Progress, display the current state or progress of a running task
 *
 * @noInheritDoc
 * @element li-progress
 * @cssprop --background
 * @cssprop --background-inner
 * @cssprop --color
 * @cssprop --box-shadow
 */
// @dynamic
export class LithiumProgress extends LitElement {
  /** Current progress value (out of 100) */
  @property({ type: Number }) value = 0;

  /** Display value in progress */
  @property({ type: Boolean }) showValue = true;

  /** Display progress with a circular layout */
  @property({ type: Boolean }) circular = false;

  private radius = 54;
  private circumference = 2 * Math.PI * this.radius;
  @property({ type: Number }) private dashoffset = 80;

  static get styles() {
    return [baseStyles, styles];
  }

  render() {
    return html`
      ${this.circular
        ? html`
            <div class="progress-circular">
              <svg class="progress-circular__svg" width="120" height="120" viewBox="0 0 120 120">
                <circle class="progress-circular__meter" cx="60" cy="60" r="${this.radius}" stroke-width="12" />
                <circle
                  class="progress-circular__value"
                  style="stroke-dasharray:${this.circumference};stroke-dashoffset:${this.dashoffset};"
                  cx="60"
                  cy="60"
                  r="${this.radius}"
                  stroke-width="12"
                />
              </svg>
              <div class="progress-circular__value-text">${this.value}%</div>
            </div>
          `
        : html`
            <div class="progress-bar">
              <div
                style="transform: translateX(${this.value}%)"
                class="progress-bar__inner"
                role="progressbar"
                aria-valuenow="${this.value}"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
              ${this.showValue
                ? html`
                    <div class="progress-bar__value">${this.value}%</div>
                  `
                : ''}
            </div>
          `}
    `;
  }

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.progress(this.value);
  }

  protected updated(props: Map<string, any>) {
    super.updated(props);
    this.progress(this.value);
  }

  private progress(value: number) {
    const progress = value / 100;
    this.dashoffset = this.circumference * (1 - progress);
  }
}

registerElementSafely('li-progress', LithiumProgress);

declare global {
  interface HTMLElementTagNameMap {
    'li-progress': LithiumProgress;
  }
}
