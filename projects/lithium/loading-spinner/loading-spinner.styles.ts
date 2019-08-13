import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

const componentStyles = css`
  :host {
    display: inline-block;
    overflow: hidden;
    line-height: 0;
  }

  .li-spinner {
    animation: rotation 1.4s linear infinite;
    will-change: transform, animation;
    stroke: var(--li-spinner-color, var(--li-common-color-gray-300));
    width: 40px;
    height: 40px;
  }

  @keyframes rotation
  {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }

  .li-spinner-circle {
    stroke-dasharray: 187;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: turn 1.4s ease-in-out infinite;
  }

  @keyframes turn
  {
    0% {
      stroke-dashoffset: 187;
    }
    50% {
      stroke-dashoffset: 46.75;
      transform: rotate(135deg);
    }
    100% {
      stroke-dashoffset: 187;
      transform: rotate(450deg);
    }
  }

  :host([small]) .li-spinner{
    width: 20px;
    height: 20px;
  }

  :host([large]) .li-spinner {
    width: 60px;
    height: 60px;
  }
`;

export const styles = [
  styleVariables,
  componentStyles
];
