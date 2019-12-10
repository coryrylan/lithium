import { querySlot, registerElementSafely } from 'lithium-ui/common';
import { LithiumInput } from 'lithium-ui/input';

/**
 * Input, standard textarea with accessibility and error enhancements.
 *
 * @noInheritDoc
 * @element li-datalist
 * @slot default - Content slot for modal body
 * @attr {String} error - Set error styles
 * @cssprop --color
 * @cssprop --color-error
 * @cssprop --background
 * @cssprop --background-disabled
 * @cssprop --border-color
 * @cssprop --border-radius
 */
// @dynamic
export class LithiumDatalist extends LithiumInput {
  private listId = `${this.inputId}-list`;

  @querySlot('datalist') private datalist: HTMLDataListElement;

  connectedCallback() {
    super.connectedCallback();
    this.datalist.id = this.listId;
    this.input.setAttribute('list', this.listId);
  }
}

registerElementSafely('li-datalist', LithiumDatalist);

declare global {
  interface HTMLElementTagNameMap {
    'li-datalist': LithiumDatalist;
  }
}
