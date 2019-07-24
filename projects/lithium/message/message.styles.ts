import { css } from 'lit-element';

export const styles = css`
  :host {
    --background-color: #2974ca;
    --border-radius: 4px;
    --border: 0;
    --warning-background-color: #c69b20;
    --error-background-color: #b31d1d;
    --success-background-color: #3d9b3d;
    --icon-color: #fff;
    --success-icon-color: #fff;
    --warning-icon-color: #fff;
    --error-icon-color: #fff;
    --color: #fff;
    color: var(--color);
    background-color: var(--background-color);
    border: var(--border);
    border-radius: var(--border-radius);
    display: block;
    padding: 1rem 1rem 1rem 3rem;
    font-size: 1 rem;
    margin-bottom: 2rem;
    position: relative;
  }

  :host([type='success']) {
    background-color: var(--success-background-color);
  }

  :host([type='warning']) {
    background-color: var(--warning-background-color);
  }

  :host([type='error']) {
    background-color: var(--error-background-color);
  }

  :host([type='success']) li-icon {
    color: var(--success-icon-color);
  }

  :host([type='warning']) li-icon {
    color: var(--warning-icon-color);
  }

  :host([type='error']) li-icon {
    color: var(--error-icon-color);
  }

  ::slotted(p) {
    margin-bottom: 0 !important;
  }

  li-icon {
    --width: 20px;
    --height: 20px;
    color: var(--icon-color);
    line-height: 1.5rem;
    position: absolute;
    top: 18px;
    left: 16px;
  }
`;
