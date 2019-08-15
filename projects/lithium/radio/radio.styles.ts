import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

const componentStyles = css`
  :host {
    display: block;
    margin-bottom: 1rem;
    position: relative;
  }

  ::slotted(label) {
    margin-left: 1.8rem;
    margin-right: 1rem;
    cursor: pointer;
  }

  ::slotted([type=radio]) {
    position: absolute;
    left: -9999px;
  }

  .circle {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 1px solid var(--li-radio-border-color, var(--li-common-color-gray-300));
    background: var(--li-radio-background-color, var(--li-common-color-white-100));
    border-radius: 50%;
  }

  .circle-wrapper {
    position: absolute;
    display: inline-block;
    top: 2px;
  }

  .circle-fill {
    display: none;
    pointer-events: none;
  }

  :host([checked]) .circle-fill {
    background-color: var(--li-radio-fill-background-color, var(--li-common-color-blue-100));
    display: block;
    position: absolute;
    width: 14px;
    height: 14px;
    top: 3px;
    left: 3px;
    z-index: 99;
    border-radius: 50%;
  }

  :host([disabled]) ::slotted(label) {
    color: var(--li-radio-disabled-label-color, var(--li-common-color-gray-300)) !important;
    cursor: not-allowed;
  }
`;

export const styles = [
  styleVariables,
  componentStyles
];
