import { css } from 'lit-element';

export const styles = css`
  :host {
    --primary-color: #ccc;
  }

  .li-spinner {
    animation: rotation 1.4s linear infinite;
    stroke: #ccc;
    will-change: transform, animation;
  }

  .li-spinner--light .spinner {
    stroke: var(--primary-color);
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
