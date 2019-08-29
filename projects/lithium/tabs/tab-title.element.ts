import { LitElement, html } from 'lit-element';


// @dynamic
export class LithiumTabTitle extends LitElement {
  render() {
    return html`<slot></slot>`;
  }
}
