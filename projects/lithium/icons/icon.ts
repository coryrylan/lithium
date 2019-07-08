import { LitElement, html, property } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './icon.styles';
import { registry } from './icon.service';
import { unknownIcon } from './svg';

// @dynamic
export class LithiumIcon extends LitElement {
  @property() name = 'unknown';

  static get styles() { return styles; }

  render() {
    return html`<div .innerHTML="${registry[this.name] ? registry[this.name] : registry[unknownIcon.name]}"></div>`;
  }
}

registerElementSafely('li-icon', LithiumIcon);
