import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

const componentStyles = css`
  :host {
    display: block;
    font-size: 0.85rem;
    color: var(--li-input-error-color, var(--li-common-color-red-50));
  }
`;

export const styles = [
  styleVariables,
  componentStyles
];
