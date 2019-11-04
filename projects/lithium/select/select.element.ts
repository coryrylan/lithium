import { registerElementSafely } from 'lithium-ui/common';
import { LithiumInput } from 'lithium-ui/input';

/**
 * Input, standard select input with accessibility and error enhancements.
 *
 * @noInheritDoc
 * @element li-select
 * @slot default - Content slot select input
 * @attr {String} error - Set error styles
 * @cssprop --li-input-color
 * @cssprop --li-input-background
 * @cssprop --li-input-border-color
 * @cssprop --li-input-border-radius
 * @cssprop --li-input-error-color
 * @cssprop --li-input-disabled-background
 */
// @dynamic
export class LithiumSelect extends LithiumInput {}

registerElementSafely('li-select', LithiumSelect);

declare global {
  interface HTMLElementTagNameMap {
    'li-select': LithiumSelect;
  }
}
