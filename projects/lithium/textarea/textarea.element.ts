import { registerElementSafely } from 'lithium-ui/common';
import { LithiumInput } from 'lithium-ui/input';

/**
 * Input, standard textarea with accessibility and error enhancements.
 *
 * @noInheritDoc
 * @element li-textarea
 * @slot default - Content slot for modal body
 * @attr {String} error - Set error styles
 * @cssprop --li-input-color
 * @cssprop --li-input-background
 * @cssprop --li-input-border-color
 * @cssprop --li-input-border-radius
 * @cssprop --li-input-error-color
 * @cssprop --li-input-disabled-background
 */
// @dynamic
export class LithiumTextArea extends LithiumInput {}

registerElementSafely('li-textarea', LithiumTextArea);

declare global {
  interface HTMLElementTagNameMap {
    'li-textarea': LithiumTextArea;
  }
}
