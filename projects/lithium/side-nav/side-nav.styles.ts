import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

export const componentStyles = css`
  .li-side-nav {
    position: fixed;
    left: -400px;
    top: var(--li-side-nav-top, 0);
    bottom: 0;
    width: 80%;
    max-width: var(--li-side-nav-width, 280px);
    z-index: 201;
    background-color: var(--li-side-nav-background-color, var(--li-common-color-white-100));
    overflow-x: hidden;
    overflow-y: auto;
    will-change: left;
    transition: left var(--li-side-nav-transition-speed, 250ms) ease-in;
  }

  :host([sticky]) .li-side-nav {
    border-right: 1px solid var(--li-side-nav-border-color, var(--li-common-color-gray-100));
  }

  .li-side-nav-open .li-side-nav {
    left: 0;
  }

  .li-menu-heading {
    font-size: 18px;
    position: relative;
    height: 50px;
    overflow: hidden;
    background-color: var(--li-side-nav-header-background-color, var(--li-common-color-gray-100));
    color: var(--li-side-nav-color, #2d2d2d);
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
    color: var(--li-side-nav-color, var(--li-common-color-gray-500));

  }

  .li-menu-close-icon {
    --color: var(--li-side-nav-color, var(--li-common-color-gray-500));
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
    transition: background var(--li-side-nav-transition-speed) ease-in;
  }

  .li-side-nav-open .li-side-nav-backdrop {
    pointer-events: auto;
    background: rgba(0,0,0,.5);
  }
`;

export const styles = [
  styleVariables,
  componentStyles
];
