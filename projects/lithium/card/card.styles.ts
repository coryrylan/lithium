import { css } from 'lit-element';

export const styles = css`
  :host {
    --background-color: #f3f3f3;
    --border-color: #e4e4e4;
    --border-radius: 4px;
    background-color: var(--background-color);
    border-color: var(--border-color);
    border-bottom: 2px solid var(--border-color);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    margin-bottom: 1rem;
    display: block;
  }
`;
