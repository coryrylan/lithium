import { querySlot, registerElementSafely } from 'lithium-ui/common';
import { LithiumInput } from 'lithium-ui/input';

/**
 * Input, standard textarea with accessibility and error enhancements.
 *
 * @noInheritDoc
 * @element `li-datalist`
 * @slot `default` - Content slot for modal body
 * @styleAttr `error` - Set error styles
 * @cssProp `--li-input-color`
 * @cssProp `--li-input-background`
 * @cssProp `--li-input-border-color`
 * @cssProp `--li-input-border-radius`
 * @cssProp `--li-input-error-color`
 * @cssProp `--li-input-disabled-background`
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
