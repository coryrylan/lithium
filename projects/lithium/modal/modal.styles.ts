import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

export const componentStyles = css`
  :host([large]) .li-modal {
    max-width: 700px;
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
    padding: 1rem;
    background-color: var(--li-common-color-white-100);
    color: var(--li-common-color-gray-500);
    width: 100%;
    max-width: var(--li-modal-max-width, 600px);
    max-height: var(--li-modal-max-height, initial);
    margin: 24px auto;
    position: relative;
    border-radius: 4px;
    z-index: 302;
  }

  .li-modal-close-btn {
    position: absolute;
    text-align: center;
    width: auto;
    height: auto;
    padding: 12px;
    font-size: 24px;
    top: 0;
    right: 0;
    line-height: 14px;
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

export const styles = [
  styleVariables,
  componentStyles
];
