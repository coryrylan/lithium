import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

export const componentStyles = css`
  :host([large]) .li-modal {
    max-width: 70em;
  }

  .li-modal-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 300;
  }

  .li-modal {
    border: 1px solid var(--li-common-color-gray-300);
    padding: 1.6em;
    background-color: var(--li-common-color-white-100);
    color: var(--li-common-color-gray-500);
    width: 100%;
    max-width: var(--li-modal-max-width, 60em);
    max-height: var(--li-modal-max-height, initial);
    margin: 3.2em auto;
    position: relative;
    border-radius: 0.4em;
    z-index: 302;
  }

  .li-modal-close-btn {
    position: absolute;
    text-align: center;
    width: auto;
    height: auto;
    padding: 0.4em 0.5em;
    font-size: 2.4em;
    top: 0;
    right: 0;
    line-height: 1.5;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  li-icon {
    --li-icon-color: var(--li-common-color-gray-500);
  }

  .li-modal-backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 301;
  }
`;

export const styles = [styleVariables, componentStyles];
