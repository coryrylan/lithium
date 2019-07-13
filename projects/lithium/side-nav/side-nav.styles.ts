import { css } from 'lit-element';

export const styles = css`
  :host {
    --text-color: #2d2d2d;
    --nav-border-color: #f3f3f3;
    --nav-background-color: #fff;
    --nav-top: 0;
    --nav-width: 280px;
    --transition-speed: 250ms;
    --header-background-color: #f3f3f3;
  }

  .li-side-nav {
    position: fixed;
    left: -400px;
    top: var(--nav-top);
    bottom: 0;
    width: 80%;
    max-width: var(--nav-width);
    z-index: 201;
    background-color: var(--nav-background-color);
    overflow: hidden;
    will-change: left;
    transition: left var(--transition-speed) ease-in;
  }

  :host([sticky]) .li-side-nav {
    border-right: 1px solid var(--nav-border-color);
  }

  .li-side-nav-open .li-side-nav {
    left: 0;
  }

  .li-menu-heading {
    font-size: 18px;
    position: relative;
    height: 50px;
    overflow: hidden;
    background-color: var(--header-background-color);
    color: var(--text-color);
  }

  .li-menu-heading-text {
    float: left;
    padding: 14px 16px;
  }

  .li-menu-close-btn {
    border: 0;
    margin-bottom: 6px;
    padding: 10px 20px;
    height: 50px;
    display: block;
    position: absolute;
    font-size: 1.5em;
    right: 0;
    background-color: transparent;
    cursor: pointer;
    color: var(--text-color);

  }

  .li-menu-close-icon {
    --color: var(--text-color);
  }

  .li-side-nav-slot::slotted(a), .li-side-nav-slot::slotted(button) {
    display: block;
    padding: 18px 13px 16px 26px;
    font-size: 1em;
    text-decoration: none;
    color: var(--nav-text-color);
    position: relative;
    font-weight: bold;
    cursor: pointer;
  }

  .li-side-nav-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    width: 100%;
    height: 100%;
    background: transparent;
    pointer-events: none;
    will-change: background;
    transition: background var(--transition-speed) ease-in;
  }

  .li-side-nav-open .li-side-nav-backdrop {
    pointer-events: auto;
    background: rgba(0,0,0,.5);
  }
`;
