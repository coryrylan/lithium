import { css } from 'lit-element';

export const styles = css`
  :host {
    --text-color: inherit;
    --background-color: inherit;
    --border-color: #ccc;
    --breakpoint: 480px;
  }

  .li-tabs {
    display: block;
  }

  .li-tabs-nav {
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
  }

  .li-tabs-nav::before, .li-tabs-nav::after {
    content: ' ';
    display: table;
    clear: both;
  }

  .li-tabs-nav > button {
    position: relative;
    display: block;
    background-color: transparent;
    width: 50%;
    float: left;
    margin-bottom: -1px;
    cursor: pointer;
    padding: 10px 6px;
    line-height: 1.42857143;
    text-decoration: none;
    text-align: center;
    transition: all 0.3s;
    font-weight: 500;
    font-size: 14px;
    color: var(--text-color);
  }

  .li-tabs-nav > button.active,
  .li-tabs-nav > button.active:hover,
  .li-tabs-nav > button.active:focus {
    cursor: default;
    color: var(--text-color);
  }

  .li-tabs-nav > button:focus,
  .li-tabs-nav > button:hover {
    color: var(--text-color);
  }

  .li-tabs-nav > button:nth-child(-n + 3) {
    border-bottom: 1px solid var(--border-color);
  }

  .li-tabs-nav > button:nth-child(even) {
    border-right: 1px solid var(--border-color);
  }

  @media (min-width: 300px) {
    .li-tabs-nav > button {
      margin-right: 2px;
      width: auto;
      text-align: left;
      border: 1px solid transparent;
      border-bottom: 3px solid transparent;
    }

    .li-tabs-nav > button:nth-child(even) {
      border-right: 0;
    }

    .li-tabs-nav > button:nth-child(-n + 3) {
      border-bottom: 3px solid transparent;
    }

    .li-tabs-nav > button.active {
      background-color: var(--background-color);
      border-bottom: 3px solid var(--border-color);
    }
  }

  @media (min-width: 480px) {
    .li-tabs-nav > button {
      padding: 10px 15px;
    }
  }
`;
