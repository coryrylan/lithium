import { LitElement, html, property } from 'lit-element';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './code-example.styles';
import * as Prism from 'prismjs';

// @dynamic
export class LithiumCodeExample extends LitElement {
  @property({ type: String }) language = 'javascript';
  @property({ type: String }) code = '';
  @property({ type: String }) private renderedCode = '';

  static get styles() { return styles; }

  render() {
    return html`
      <div class="li-code-example">
        <pre .className="${'language-' + this.language}">
          <code .className="${'language-' + this.language}" .innerHTML="${this.renderedCode}"></code>
        </pre>
      </div>
    `;
  }

  updated() {
    this.renderedCode = Prism.highlight(this.code, Prism.languages[this.language]);
  }
}

registerElementSafely('li-code-example', LithiumCodeExample);
