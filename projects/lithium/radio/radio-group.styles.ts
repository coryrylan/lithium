import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

const componentStyles = css`
  :host([inline]) ::slotted(li-radio) {
    display: inline-block !important;
  }

  fieldset {
    border: 0;
    padding: 0;
    margin: 0;
  }

  ::slotted(legend) {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

export const styles = [
  styleVariables,
  componentStyles
];
