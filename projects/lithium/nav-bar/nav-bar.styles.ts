import { css } from 'lit-element';

export const styles = css`
  :host {
    --li-header-background-color: #f3f3f3;
    box-sizing: border-box;
    margin-bottom: 12px;
    background-color: var(--li-header-background-color);
    display: flex;
    width: 100%;
    overflow: hidden;
  }

  :host([sticky]) {
    position: fixed;
    z-index: 100;
  }

  ::slotted(a), ::slotted(button) {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 16px;
  }

  ::slotted([li-nav-bar-right]) {
    margin-left: auto;
  }
`;
