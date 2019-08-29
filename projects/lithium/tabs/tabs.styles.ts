import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

export const componentStyles = css`
  .li-tabs {
    display: block;
  }

  .li-tabs-nav {
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
  }

  .li-tabs-nav::before, .li-tabs-nav::after {
    content: ' ';
    display: table;
    clear: both;
  }

  .li-tabs-nav > button {
    position: relative;
    display: block;
    background-color: transparent;
    width: 50%;
    float: left;
    margin-bottom: -1px;
    cursor: pointer;
    padding: 1em 0.6em;
    line-height: 1.42857143;
    text-decoration: none;
    text-align: center;
    transition: all 0.3s;
    font-size: 1em;
    font-family: inherit;
    color: var(--li-tabs-text-color, inherit);
  }

  .li-tabs-nav > button.active,
  .li-tabs-nav > button.active:hover,
  .li-tabs-nav > button.active:focus {
    cursor: default;
    color: var(--li-tabs-text-color, inherit);
  }

  .li-tabs-nav > button:focus,
  .li-tabs-nav > button:hover {
    color: var(--li-tabs-text-color, inherit);
  }

  .li-tabs-nav > button:nth-child(-n + 3) {
    border-bottom: 1px solid var(--li-tabs-border-color, var(--li-common-color-gray-300));
  }

  .li-tabs-nav > button:nth-child(even) {
    border-right: 1px solid var(--li-tabs-border-color, var(--li-common-color-gray-300));
  }

  @media (min-width: 300px) {
    .li-tabs-nav > button {
      margin-right: 0.2em;
      width: auto;
      text-align: left;
      border: 1px solid transparent;
      border-bottom: 0.3em solid transparent;
    }

    .li-tabs-nav > button:nth-child(even) {
      border-right: 0;
    }

    .li-tabs-nav > button:nth-child(-n + 3) {
      border-bottom: 0.3em solid transparent;
    }

    .li-tabs-nav > button.active {
      background-color: var(--li-tabs-button-background-color, inherit);
      border-bottom: 0.3em solid;
      border-bottom-color: var(--li-tabs-button-selected-border-color, var(--li-common-color-blue-100))
    }
  }

  @media (min-width: 480px) {
    .li-tabs-nav > button {
      padding: 1em 1.5em;
    }
  }
`;

export const styles = [
  styleVariables,
  componentStyles
];
