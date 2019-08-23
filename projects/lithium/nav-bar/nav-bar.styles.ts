import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

export const componentStyles = css`
  :host {
    background-color: var(--li-nav-bar-background-color, var(--li-common-color-white-100));
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.20);
    color: var(--li-nav-bar-color, var(--li-common-color-gray-500));
    margin-bottom: var(--li-common-margin-bottom-spacing);
    display: flex;
    width: 100%;
    overflow: hidden;
    line-height: 2.4em;
  }

  :host([sticky]) {
    position: fixed;
    z-index: 100;
  }

  ::slotted(a), ::slotted(button) {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 1em;
    background-color: transparent;
    border: 0;
    color: var(--li-nav-bar-color, var(--li-common-color-gray-500));
    text-decoration: none;
    line-height: 1.5 !important;
    cursor: pointer;
  }

  ::slotted(a:hover), ::slotted(button:hover) {
    background-color: var(--li-nav-bar-hover-background-color, var(--li-common-color-gray-100)) !important;
  }

  ::slotted([li-nav-bar-right]) {
    margin-left: auto !important;
  }
`;

export const styles = [
  styleVariables,
  componentStyles
];
