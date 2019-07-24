import { css } from 'lit-element';

export const styles = css`
  :host {
    width: var(--li-icon-width, 24px);
    height: var(--li-icon-height, 24px);
    display: inline-block;
  }

  svg {
    fill: var(--li-icon-color, #2d2d2d);
  }
`;
