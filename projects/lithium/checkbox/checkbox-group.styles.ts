import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

const componentStyles = css`
  :host {
    display: block;
  }

  :host([inline]) ::slotted(li-checkbox) {
    display: inline-block !important;
  }

  fieldset {
    border: 0;
    padding: 0;
    margin: 0;
  }

  ::slotted(legend) {
    display: block;
    margin-bottom: 0.5em;
  }
`;

export const styles = [styleVariables, componentStyles];
