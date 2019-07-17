import { css } from 'lit-element';

export const styles = css`
  :host {
    --border-color: #ccc;
  }

  .li-tab-content {
    padding-top: 1rem;
    overflow: visible;
    min-height: 225px;
    border-top: 1px solid var(--border-color);
  }
`;
