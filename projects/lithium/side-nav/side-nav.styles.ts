import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

export const componentStyles = css`
  .li-side-nav {
    position: fixed;
    left: -40em;
    top: var(--li-side-nav-top, 0);
    bottom: 0;
    width: 80%;
    max-width: var(--li-side-nav-width, 28em);
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
    font-size: 1.8em;
    position: relative;
    height: 5em;
    overflow: hidden;
    background-color: var(--li-side-nav-header-background-color, var(--li-common-color-gray-100));
    color: var(--li-side-nav-color, #2d2d2d);
  }

  .li-menu-heading-text {
    float: left;
    padding: 1.4em 1.6em;
  }

  .li-menu-close-btn {
    border: 0;
    margin-bottom: 0.6em;
    padding: 1em 2em;
    height: 5em;
    display: block;
    position: absolute;
    font-size: 1.6em;
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
    padding: 1.125em 0.8125em 1em 1.625em;
    text-decoration: none;
    color: var(--nav-text-color);
    position: relative;
    font-weight: bold;
    cursor: pointer;
  }

  .li-side-nav-slot::slotted(a:hover), .li-side-nav-slot::slotted(button:hover) {
    background-color: var(--li-side-nav-hover-background-color, var(--li-common-color-gray-100)) !important;
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
