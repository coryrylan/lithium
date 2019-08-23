import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

export const componentStyles = css`
  .li-progress-bar {
    width: 100%;
    height: 2em;
    background: var(--li-progress-bar-background-color, var(--li-common-color-gray-100));
    border-radius: 0.2em;
    position: relative;
    overflow: hidden;
    text-align: center;
    -webkit-box-shadow: inset 0 1px 2px var(--li-progress-bar-shadow-color, rgba(0, 0, 0, 0.1));
    box-shadow: inset 0 1px 2px var(--li-progress-bar-shadow-color, rgba(0, 0, 0, 0.1));
    padding: 0.2em;
    margin-bottom: 0.4em;
  }

  .li-progress-bar-inner {
    width: 100%;
    height: 100%;
    background: var(--li-progress-bar-inset-background-color, var(--li-common-color-gray-200));
    position: absolute;
    top: 0;
    left: -100%;
    text-align: center;
    line-height: 3.5em;
    font-size: 1em;
    will-change: transform;
    transition: transform 100ms ease-in;
  }

  .li-progress-bar-value {
    color: var(--li-progress-bar-color, var(--li-common-color-gray-500));
    z-index: 2;
    position: absolute;
    text-align: center;
    line-height: 1.4;
    left: 0;
    right: 0;
    top: 0;
    font-size: 1.6em;
  }
`;

export const styles = [
  styleVariables,
  componentStyles
];
