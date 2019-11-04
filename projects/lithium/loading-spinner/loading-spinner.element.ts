import { html, LitElement } from 'lit-element';

import { IntlService, registerElementSafely } from 'lithium-ui/common';
import { styles } from './loading-spinner.element.css';

/**
 * Loading Spinner, display a indeterminate task that is processing
 *
 * @noInheritDoc
 * @element li-loading-spinner
 * @attr {String} small - small sized spinner
 * @attr {String} large - large sized spinner
 * @cssProp --li-spinner-color
 */
// @dynamic
export class LithiumLoadingSpinner extends LitElement {
  static get styles() {
    return styles;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('aria-live', 'polite');
  }

  render() {
    return html`
      <svg class="li-spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle class="li-spinner-circle" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
      </svg>
      <span class="li-sr-only">${IntlService.registry.loading}</span>
    `;
  }
}

registerElementSafely('li-loading-spinner', LithiumLoadingSpinner);
