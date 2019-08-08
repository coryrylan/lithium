import { registerElementSafely, BaseButton } from 'lithium-ui/common';
import { styles } from './button.styles';

// @dynamic
export class LithiumButton extends BaseButton {
  static get styles() { return styles; }
}

registerElementSafely('li-button', LithiumButton);
