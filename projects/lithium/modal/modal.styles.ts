import { css } from 'lit-element';

export const styles = css`
  :host([large]) .li-modal {
    max-width: 700px;
  }

  .li-modal-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 300;
  }

  .li-modal {
    border: 1px solid #ccc;
    padding: 1rem;
    background-color: #fff;
    color: #2d2d2d;
    width: 100%;
    max-width: 600px;
    margin: 24px auto;
    position: relative;
    border-radius: 4px;
    z-index: 302;
  }

  .li-modal-close-btn {
    position: absolute;
    text-align: center;
    width: auto;
    height: auto;
    padding: 12px;
    font-size: 24px;
    top: 0;
    right: 0;
    line-height: 14px;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  li-icon {
    --li-icon-color: #2d2d2d;
  }

  .li-modal-backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 301;
  }
`;
