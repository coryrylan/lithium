import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

export const componentStyles = css`
  .li-message {
    color: var(--li-message-color, var(--li-common-color-white-100));
    background-color: var(--li-message-background-color, var(--li-common-color-blue-100));
    border: var(--li-message-border, 0);
    border-radius: var(--li-message-border-radius, var(--li-common-border-radius));
    display: block;
    padding: 1rem 1rem 1rem 3.5rem;
    font-size: 1 rem;
    margin-bottom: 2rem;
    position: relative;
  }

  :host([type='success']) .li-message {
    background-color: var(--li-message-success-background-color, var(--li-common-color-green-100));
  }

  :host([type='warning']) .li-message {
    background-color: var(--li-message-warning-background-color, var(--li-common-color-orange-100));
  }

  :host([type='error']) .li-message {
    background-color: var(--li-message-error-background-color, var(--li-common-color-red-100));
  }

  :host([type='success']) li-icon {
    color: var(--li-message-success-icon-color, var(--li-common-color-white-100));
  }

  :host([type='warning']) li-icon {
    color: var(--li-message-warning-icon-color, var(--li-common-color-white-100));
  }

  :host([type='error']) li-icon {
    color: var(--li-message-error-icon-color, var(--li-common-color-white-100));
  }

  ::slotted(p) {
    margin-bottom: 0 !important;
  }

  .type-icon {
    --width: 20px;
    --height: 20px;
    color: var(--li-message-icon-color, var(--li-common-color-white-100));
    line-height: 1.5rem;
    position: absolute;
    top: 16px;
    left: 16px;
  }

  .close-btn {
    background: transparent;
    border: 0;
    cursor: pointer;
    position: absolute;
    width: 38px;
    height: 38px;
    top: 9px;
    right: 12px;
    background: rgba(0,0,0,0.2);
    line-height: 0;
    border-radius: 2px;
  }

  .close-btn li-icon {
    --li-icon-color: var(--li-message-icon-color, var(--li-common-color-white-100));
    width: 24px;
    height: 24px;
  }

  .close-btn:hover, .close-btn:focus {
    background: rgba(0,0,0,0.2);
  }
`;

export const styles = [
  styleVariables,
  componentStyles
];
