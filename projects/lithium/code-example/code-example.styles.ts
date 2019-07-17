import { css } from 'lit-element';

export const styles = css`
  /**
    * prism.js default theme for JavaScript, CSS and HTML
    * Based on dabblet (http://dabblet.com)
    * @author Lea Verou
    */

  code[class*="language-"],
  pre[class*="language-"] {
    color: var(--token-15);
    background: none;
    text-shadow: 0 1px var(--token-14);
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
    text-shadow: none;
    background: var(--token-1);
  }

  pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
  code[class*="language-"]::selection, code[class*="language-"] ::selection {
    text-shadow: none;
    background: var(--token-1);
  }

  @media print {
    code[class*="language-"],
    pre[class*="language-"] {
      text-shadow: none;
    }
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: var(--token-2);
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: .1em;
    border-radius: .3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: var(--token-3);
  }

  .token.punctuation {
    color: var(--token-4);
  }

  .namespace {
    opacity: .7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: var(--token-5);
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: var(--token-6);
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: var(--token-7);
    background: var(--token-11);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: var(--token-8);
  }

  .token.function,
  .token.class-name {
    color: var(--token-9);
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: var(--token-10);
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  /* CUSTOM */
  :host {
    display: block;
    margin-bottom: 24px;
    --token-1: #b3d4fc;
    --token-2: #f3f3f3;
    --token-3: slategray;
    --token-4: #999;
    --token-5: #905;
    --token-6: #690;
    --token-7: #9a6e3a;
    --token-8: #07a;
    --token-9: #DD4A68;
    --token-10: #e90;
    --token-11: hsla(0, 0%, 100%, .5);
    --token-12: #f3f3f3;
    --token-13: #e4e4e4;
    --token-14: white;
    --token-15: black;
  }

  pre {
    padding-bottom: 0;
  }

  code {
    display: block;
    margin: -58px 0px -60px;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: var(token-11);
    border-left: 8px solid var(--token-13);
    padding-top: 38px;
  }
`;
