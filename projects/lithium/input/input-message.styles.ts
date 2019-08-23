import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

const componentStyles = css`
  :host {
    display: block;
  }

  slot {
    font-size: 1.4em !important;
  }
`;

export const styles = [
  styleVariables,
  componentStyles
];
