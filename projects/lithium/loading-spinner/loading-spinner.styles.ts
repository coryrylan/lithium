import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

const componentStyles = css`
  .li-spinner {
    animation: rotation 1.4s linear infinite;
    stroke: var(--li-common-color-gray-300);
    will-change: transform, animation;
    stroke: var(--li-spinner-color, var(--li-common-color-gray-300));
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
`;

export const styles = [
  styleVariables,
  componentStyles
];
