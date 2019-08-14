import { LithiumInput } from 'lithium-ui/input';
import { registerElementSafely } from 'lithium-ui/common';

export class LithiumTextArea extends LithiumInput { }

registerElementSafely('li-textarea', LithiumTextArea);
