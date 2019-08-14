import { LithiumInput } from 'lithium-ui/input';
import { registerElementSafely } from 'lithium-ui/common';

export class LithiumSelect extends LithiumInput { }

registerElementSafely('li-select', LithiumSelect);
