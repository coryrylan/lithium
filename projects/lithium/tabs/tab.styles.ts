import { css } from 'lit-element';

export const styles = css`
  :host {
    --border-color: #ccc;
    --padding: 8px;
  }

  .li-tab-content {
    padding: var(--padding);
    overflow: visible;
    min-height: 225px;
    border-top: 1px solid var(--border-color);
  }

  @media (min-width: 480px) {
    .li-tab-content {
      padding: 18px;
    }
  }
`;
