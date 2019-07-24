import { css } from 'lit-element';

export const styles = css`
  :host {
    color: var(--li-message-color, #fff);
    background-color: var(--li-message-background-color, #2974ca);
    border: var(--li-message-border, 0);
    border-radius: var(--li-message-border-radius, 4px);
    display: block;
    padding: 1rem 1rem 1rem 3rem;
    font-size: 1 rem;
    margin-bottom: 2rem;
    position: relative;
  }

  :host([type='success']) {
    background-color: var(--li-message-success-background-color, #3d9b3d);
  }

  :host([type='warning']) {
    background-color: var(--li-message-warning-background-color, #c69b20);
  }

  :host([type='error']) {
    background-color: var(--li-message-error-background-color, #b31d1d);
  }

  :host([type='success']) li-icon {
    color: var(--li-message-success-icon-color, #fff);
  }

  :host([type='warning']) li-icon {
    color: var(--li-message-warning-icon-color, #fff);
  }

  :host([type='error']) li-icon {
    color: var(--li-message-error-icon-color, #fff);
  }

  ::slotted(p) {
    margin-bottom: 0 !important;
  }

  li-icon {
    --width: 20px;
    --height: 20px;
    color: var(--li-message-icon-color, #fff);
    line-height: 1.5rem;
    position: absolute;
    top: 18px;
    left: 16px;
  }
`;
