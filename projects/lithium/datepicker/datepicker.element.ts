import { html, LitElement } from 'lit-element';
import { registerElementSafely } from 'lithium-ui/common';
import { LithiumDatepickerInline } from './datepicker-inline.element';

export class LithiumDatepicker extends LitElement {
  render() {
    return html`
      <slot></slot>
    `;
  }
}

registerElementSafely('li-datepicker-inline', LithiumDatepickerInline);
registerElementSafely('li-datepicker', LithiumDatepicker);
