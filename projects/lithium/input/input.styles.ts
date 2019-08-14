import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

const componentStyles = css`
  :host {
    display: block;
    margin-bottom: 1rem;
  }

  ::slotted(input), ::slotted(textarea), ::slotted(select) {
    -moz-appearance: none;
	  -webkit-appearance: none;
    display: block;
    background: var(--li-input-background, var(--li-common-color-white-100));
  }

  :host([error]) ::slotted(label) {
    color: var(--li-input-error-color, var(--li-common-color-red-50));
  }

  :host([error]) ::slotted(input),
  :host([error]) ::slotted(textarea),
  :host([error]) ::slotted(select) {
    border-color: var(--li-input-error-color, var(--li-common-color-red-50));
  }

  ::slotted(input:disabled),
  ::slotted(textarea:disabled),
  ::slotted(select:disabled) {
    background: var(--li-input-disabled-background, var(--li-common-color-gray-100));
    cursor: not-allowed;
  }

  ::slotted(li-input-error) {
    display: none;
  }

  :host([error]) ::slotted(li-input-error) {
    display: block;
  }

  ::slotted(input), ::slotted(textarea), ::slotted(select) {
    border: 1px solid var(--li-input-border-color, var(--li-common-color-gray-300));
    border-radius: var(--li-input-border-radius, var(--li-common-border-radius));
    padding: 0.4rem 0.5rem;
    font-size: 1rem;
    width: 100%;
  }

  ::slotted(textarea) {
    min-height: 120px;
  }
`;

export const styles = [
  styleVariables,
  componentStyles
];
