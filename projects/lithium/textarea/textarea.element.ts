import { registerElementSafely } from 'lithium-ui/common';
import { LithiumInput } from 'lithium-ui/input';

/**
 * Input, standard textarea with accessibility and error enhancements.
 *
 * @noInheritDoc
 * @element li-textarea
 * @slot default - Content slot for modal body
 * @attr {String} error - Set error styles
 * @cssprop --color
 * @cssprop --color-error
 * @cssprop --background-color
 * @cssprop --background-color-disabled
 * @cssprop --border-color
 * @cssprop --border-radius
 */
// @dynamic
export class LithiumTextArea extends LithiumInput {}

registerElementSafely('li-textarea', LithiumTextArea);

declare global {
  interface HTMLElementTagNameMap {
    'li-textarea': LithiumTextArea;
  }
}
