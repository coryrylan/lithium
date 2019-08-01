import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

const componentStyles = css`
  :host {
    width: var(--li-icon-width, 24px);
    height: var(--li-icon-height, 24px);
    display: inline-block;
  }

  svg {
    fill: var(--li-icon-color, var(--li-common-color-gray-500));
  }
`;

export const styles = [
  styleVariables,
  componentStyles
];
