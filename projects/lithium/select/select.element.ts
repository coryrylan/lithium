import { property } from 'lit-element';
import { registerElementSafely } from 'lithium-ui/common';
import { LithiumInput } from 'lithium-ui/input';

/**
 * Input, standard select input with accessibility and error enhancements.
 *
 * @element li-select
 * @slot default - Content slot select input
 * @cssprop --color
 * @cssprop --color-error
 * @cssprop --background
 * @cssprop --background-disabled
 * @cssprop --border-color
 * @cssprop --border-radius
 */
// @dynamic
export class LithiumSelect extends LithiumInput {
  /** Set input in an error state */
  @property({ type: Boolean, reflect: true }) error: boolean;
}

registerElementSafely('li-select', LithiumSelect);

declare global {
  interface HTMLElementTagNameMap {
    'li-select': LithiumSelect;
  }
}
