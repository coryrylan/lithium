import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

const componentStyles = css`
  :host {
    background-color: var(--li-card-background-color, var(--li-common-color-white-100));
    border-color: var(--li-card-border-color, var(--li-common-color-gray-200));
    border-bottom: 0.2em solid var(--li-card-border-color, var(--li-common-color-gray-200));
    border-radius: var(--li-card-border-radius, var(--li-common-border-radius));
    color: var(--li-card-color, inherit);
    padding: var(--li-card-padding, var(--li-common-padding-md));
    margin-bottom: var(--li-common-margin-bottom-spacing);
    display: block;
  }
`;

export const styles = [
  styleVariables,
  componentStyles
];
