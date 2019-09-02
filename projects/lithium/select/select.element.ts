import { LithiumInput } from 'lithium-ui/input';
import { registerElementSafely } from 'lithium-ui/common';

/**
 * Input, standard select input with accessibility and error enhancements.
 *
 * @noInheritDoc
 * @element `li-select`
 * @slot `default` - Content slot select input
 * @styleAttr `error` - Set error styles
 * @cssProp `--li-input-color`
 * @cssProp `--li-input-background`
 * @cssProp `--li-input-border-color`
 * @cssProp `--li-input-border-radius`
 * @cssProp `--li-input-error-color`
 * @cssProp `--li-input-disabled-background`
 */
// @dynamic
export class LithiumSelect extends LithiumInput {}

registerElementSafely('li-select', LithiumSelect);
