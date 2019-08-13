import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

const componentStyles = css`
  /* prism.js modified theme */
  code[class*="language-"],
  pre[class*="language-"] {
    color: var(--li-code-example-token-14, black);
    background: none;
    text-shadow: 0 1px var(--li-code-example-token-13, white);
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
    background: var(--li-code-example-token-1, #b3d4fc);
  }

  pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
  code[class*="language-"]::selection, code[class*="language-"] ::selection {
    text-shadow: none;
    background: var(--li-code-example-token-1, #b3d4fc);
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
    background: var(--li-code-example-token-2, var(--li-common-color-white-100));
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
    color: var(--li-code-example-token-3, slategray);
  }

  .token.punctuation {
    color: var(--li-code-example-token-4, #999);
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
    color: var(--li-code-example-token-5, #905);
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: var(--li-code-example-token-6, #690);
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: var(--li-code-example-token-7, #9a6e3a);
    background: var(--li-code-example-token-11, hsla(0, 0%, 100%, .5));
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: var(--li-code-example-token-8, #07a);
  }

  .token.function,
  .token.class-name {
    color: var(--li-code-example-token-9, #DD4A68);
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: var(--li-code-example-token-10, #e90);
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
    border-left: 8px solid var(--li-code-example-token-12, var(--li-common-color-gray-200));
    padding-top: 38px;
    padding-left: 0;
    border-radius: var(--li-code-example-border-radius, 4px);
    border-bottom: 2px solid var(--li-code-example-border-color, var(--li-common-color-gray-200));
  }
`;

export const styles = [
  styleVariables,
  componentStyles
];
