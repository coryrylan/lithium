import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

export const componentStyles = css`
  :host {
    display: block;
    position: relative;
    margin-bottom: 0.8rem;
  }

  ::slotted(label) {
    font-size: 1rem;
    cursor: pointer;
    padding-left: 1.8rem;
  }

  ::slotted([type=checkbox]) {
    position: absolute;
    left: -9999px;
  }

  :host([disabled]) ::slotted(label) {
    color: var(--li-checkbox-disabled-color, var(--li-common-color-gray-300));
    cursor: not-allowed;
  }

  .box {
    content: "";
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 2px;
    width: 20px;
    height: 20px;
    border: 1px solid var(--li-checkbox-border-color, var(--li-common-color-gray-300));
    background: var(--li-checkbox-background-color, var(--li-common-color-white-100));
    border-radius: 3px;
  }

  li-icon {
    display: none;
    pointer-events: none;
  }

  :host([checked]) li-icon {
    display: block;
    position: absolute;
    width: 15px;
    height: 15px;
    top: 3px;
    left: 3px;
  }

  :host([focused]) ::slotted(label) {
    outline: var(--li-common-outline);
    box-shadow: var(--li-common-outline-shadow);
  }
`;

export const styles = [
  styleVariables,
  componentStyles
];
