import { registerElementSafely } from 'lithium-ui/common';
import { LithiumIcon } from 'lithium-ui/icon-shapes';

registerElementSafely('li-icon', LithiumIcon);

declare global {
  interface HTMLElementTagNameMap {
    'li-icon': LithiumIcon;
  }
}
