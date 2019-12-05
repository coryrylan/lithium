import { registerElementSafely } from 'lithium-ui/common';
import { LithiumInput } from 'lithium-ui/input';

/**
 * Input, standard select input with accessibility and error enhancements.
 *
 * @noInheritDoc
 * @element li-select
 * @slot default - Content slot select input
 * @attr {String} error - Set error styles
 * @cssprop --color
 * @cssprop --color-error
 * @cssprop --background-color
 * @cssprop --background-color-disabled
 * @cssprop --border-color
 * @cssprop --border-radius
 */
// @dynamic
export class LithiumSelect extends LithiumInput {}

registerElementSafely('li-select', LithiumSelect);

declare global {
  interface HTMLElementTagNameMap {
    'li-select': LithiumSelect;
  }
}
