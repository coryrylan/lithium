import { css } from 'lit-element';

export const a11yStyles = css`
  .li-sr-only {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;
