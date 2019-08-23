import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

const componentStyles = css`
  :host {
    width: var(--li-icon-width, 2.4em);
    height: var(--li-icon-height, 2.4em);
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
