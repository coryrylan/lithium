import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

const componentStyles = css`
  :host {
    display: block;
    font-size: 0.85rem;
  }
`;

export const styles = [
  styleVariables,
  componentStyles
];
