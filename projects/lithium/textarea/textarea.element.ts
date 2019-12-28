import { property } from 'lit-element';
import { registerElementSafely } from 'lithium-ui/common';
import { LithiumInput } from 'lithium-ui/input';

/**
 * Input, standard textarea with accessibility and error enhancements.
 *
 * @noInheritDoc
 * @element li-textarea
 * @slot default - Content slot for modal body
 * @cssprop --color
 * @cssprop --color-error
 * @cssprop --background
 * @cssprop --background-disabled
 * @cssprop --border-color
 * @cssprop --border-radius
 */
// @dynamic
export class LithiumTextArea extends LithiumInput {
  /** Set input in an error state */
  @property({ type: Boolean, reflect: true }) error: boolean;
}

registerElementSafely('li-textarea', LithiumTextArea);

declare global {
  interface HTMLElementTagNameMap {
    'li-textarea': LithiumTextArea;
  }
}
