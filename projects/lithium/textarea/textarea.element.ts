import { LithiumInput } from 'lithium-ui/input';
import { registerElementSafely } from 'lithium-ui/common';

/**
 * Input, standard textarea with accessibility and error enhancements.
 *
 * @noInheritDoc
 * @element `li-textarea`
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
export class LithiumTextArea extends LithiumInput { }

registerElementSafely('li-textarea', LithiumTextArea);
