import { css } from 'lit-element';

import { styleVariables } from 'lithium-ui/common';

const componentStyles = css`
  :host {
    -webkit-appearance: none !important;
    background: var(--li-button-background-color, var(--li-common-color-blue-100));
    color: var(--li-button-color, var(--li-common-color-white-100));
    border-radius: var(--li-button-border-radius, var(--li-common-border-radius));
    border: 2px solid var(--li-button-background-color, var(--li-common-color-blue-100));
    padding: 6px 24px;
    margin: 0 4px 24px 0;
    font-size: 16px;
    text-decoration: none;
    text-align: center;
    line-height: 1.5rem;
    display: inline-block;
    cursor: pointer;
    text-transform: capitalize;
  }

  :host(:hover){
    opacity: 0.9;
  }

  :host([disabled]){
    opacity: 0.9;
    cursor: default;
    background: var(--li-button-disabled-background, var(--li-common-color-gray-300));
    border: 2px solid var(--li-button-disabled-background, var(--li-common-color-gray-300));
    outline: 0;
  }

  :host([role="presentation"]) {
    padding: 0;
  }

  ::slotted(a) {
    color: var(--li-button-color, var(--li-common-color-white-100)) !important;
    text-decoration: none !important;
    padding: 6px 24px !important;
    display: inline-block !important;
  }

  /* style */
  :host([outline]) {
    background-color: transparent;
    color: var(--li-button-outline-color, var(--li-common-color-blue-100));
    border: 2px solid var(--li-button-outline-border-color, var(--li-common-color-blue-100));
  }

  :host([outline]:hover) {
    background-color: var(--li-button-outline-hover-background-color, var(--li-common-color-blue-100));
    color: var(--li-button-outline-hover-color, var(--li-common-color-white-100));
  }

  :host([flat]) {
    background-color: transparent;
    color: var(--li-button-outline-color, var(--li-common-color-blue-100));
    text-decoration: underline;
    border: 0;
  }

  /* color */
  :host([success]) {
    background-color: var(--li-button-success-color, var(--li-common-color-green-100));
    border-color: var(--li-button-success-color, var(--li-common-color-green-100));
  }

  :host([warning]) {
    background-color: var(--li-button-warning-color, var(--li-common-color-orange-100));
    border-color: var(--li-button-warning-color, var(--li-common-color-orange-100));
  }

  :host([danger]) {
    background-color: var(--li-button-danger-color, var(--li-common-color-red-100));
    border-color: var(--li-button-danger-color, var(--li-common-color-red-100));
  }

  li-loading-spinner {
    margin-bottom: -3px;
  }
`;

export const styles = [
  styleVariables,
  componentStyles
];
