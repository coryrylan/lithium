import { css } from 'lit-element';

export const styles = css`
  :host {
    --width: 24px;
    --height: 24px;
    --color: #2d2d2d;
    width: var(--width);
    height: var(--height);
    display: inline-block;
  }

  svg {
    fill: var(--color);
  }
`;
