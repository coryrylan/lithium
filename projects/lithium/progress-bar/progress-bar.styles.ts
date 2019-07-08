import { css } from 'lit-element';

export const styles = css`
  :host {
    --shadow-color: rgba(0, 0, 0, 0.1);
    --off-white: #f5f5f5;
    --primary-color: #e4e4e4;
    --text-color: #2d2d2d;
  }

  .li-progress-bar {
    width: 100%;
    height: 20px;
    background: var(--off-white);
    border-radius: 2px;
    position: relative;
    overflow: hidden;
    text-align: center;
    -webkit-box-shadow: inset 0 1px 2px var(--shadow-color);
    box-shadow: inset 0 1px 2px var(--shadow-color);
    padding: 2px;
    margin-bottom: 4px;
  }

  .li-progress-bar-inner {
    width: 100%;
    height: 100%;
    background: var(--primary-color);
    position: absolute;
    top: 0;
    left: -100%;
    text-align: center;
    line-height: 35px;
    font-size: 1em;
    will-change: transform;
    transition: transform 100ms ease-in;
  }

  .li-progress-bar-value {
    color: var(--text-color);
    z-index: 2;
    position: absolute;
    text-align: center;
    left: 0;
    right: 0;
    top: 0;
  }
`;
