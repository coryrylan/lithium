import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

export const componentStyles = css`
  .li-tab-content {
    padding-top: 1.6em;
    overflow: visible;
    min-height: 22.5em;
    border-top: 1px solid var(--li-tabs-border-color, var(--li-common-color-gray-300));
  }
`;

export const styles = [
  styleVariables,
  componentStyles
];
