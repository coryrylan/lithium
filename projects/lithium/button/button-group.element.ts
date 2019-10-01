import { html, LitElement } from 'lit-element';
import { styles } from './button-group.element.css';

/**
 * Button Group, group related button actions
 *
 * @noInheritDoc
 * @element `li-button-group`
 * @slot `default` - Content slot for modal body
 * @styleAttr `secondary` - Apply secondary style.
 * @cssProp `--li-button-background-color`
 */
// @dynamic
export class LithiumButtonGroup extends LitElement {
  static get styles() {
    return styles;
  }

  protected render() {
    return html`
      <slot></slot>
    `;
  }
}
