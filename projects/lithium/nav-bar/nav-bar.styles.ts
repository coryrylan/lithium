import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

export const componentStyles = css`
  :host {
    background-color: var(--li-nav-bar-background-color, var(--li-common-color-white-100));
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.20);
    color: var(--li-nav-bar-color, var(--li-common-color-gray-500));
    margin-bottom: 12px;
    display: flex;
    width: 100%;
    overflow: hidden;
    line-height: 1.5rem;
  }

  :host([sticky]) {
    position: fixed;
    z-index: 100;
  }

  ::slotted(a), ::slotted(button) {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 16px;
    background-color: transparent;
    border: 0;
    color: var(--li-nav-bar-color, var(--li-common-color-gray-500));
    text-decoration: none;
    line-height: 1.5rem;
    cursor: pointer;
  }

  ::slotted([li-nav-bar-right]) {
    margin-left: auto;
  }
`;

export const styles = [
  styleVariables,
  componentStyles
];
