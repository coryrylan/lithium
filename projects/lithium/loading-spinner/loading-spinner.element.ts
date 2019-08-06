import { LitElement, html } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './loading-spinner.styles';

// @dynamic
export class LithiumLoadingSpinner extends LitElement {
  static get styles() {
    return styles;
  }

  render() {
    return html`
      <div>
        <svg class="li-spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle class="li-spinner-circle" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
      </div>
    `;
  }
}

registerElementSafely('li-loading-spinner', LithiumLoadingSpinner);
