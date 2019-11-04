import { html, LitElement, property } from 'lit-element';
import { highlight, languages } from 'prismjs';

import { registerElementSafely } from 'lithium-ui/common';
import { styles } from './code-example.element.css';

/**
 * Code example generator with prismjs highlighting
 *
 * @noInheritDoc
 * @element li-code-example
 * @experimental
 */
// @dynamic
export class LithiumCodeExample extends LitElement {
  @property({ type: String }) language = 'javascript';
  @property({ type: String }) code = '';
  @property({ type: String }) private renderedCode = '';

  static get styles() {
    return styles;
  }

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
    this.renderedCode = highlight(this.code, languages[this.language], this.language);
  }
}

registerElementSafely('li-code-example', LithiumCodeExample);
