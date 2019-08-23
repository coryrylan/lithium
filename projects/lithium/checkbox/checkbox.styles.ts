import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

export const componentStyles = css`
  :host {
    display: block;
    position: relative;
    margin-bottom: var(--li-common-margin-bottom-spacing);
  }

  ::slotted(label) {
    cursor: pointer !important;
    padding-left: 1.625em !important;
    margin-right: 1em !important;
    line-height: 1.5 !important;
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
    top: 0.2em;
    width: 2em;
    height: 2em;
    border: 1px solid var(--li-checkbox-border-color, var(--li-common-color-gray-300));
    background: var(--li-checkbox-background-color, var(--li-common-color-white-100));
    border-radius: 0.3em;
  }

  li-icon {
    display: none;
    pointer-events: none;
  }

  :host([checked]) li-icon {
    display: block;
    position: absolute;
    width: 1.5em;
    height: 1.5em;
    top: 0.3em;
    left: 0.3em;
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
