import { css } from 'lit-element';

export const styles = css`
  :host {
    background-color: var(--li-card-background-color, #fff);
    border-color: var(--li-card-border-color, #e4e4e4);
    border-bottom: 2px solid var(--li-card-border-color, #e4e4e4);
    border-radius: var(--li-card-border-radius, 4px);
    padding: 1.5rem;
    margin-bottom: 1rem;
    display: block;
    color: inherit;
  }
`;
