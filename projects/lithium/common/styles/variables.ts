import { css } from 'lit-element';

export const styleVariables = css`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  :host {
    /* colors */
    --li-common-color-white-100: #fff;
    --li-common-color-gray-50: #f7f7f7;
    --li-common-color-gray-100: #f3f3f3;
    --li-common-color-gray-200: #e4e4e4;
    --li-common-color-gray-300: #ccc;
    --li-common-color-gray-400: #3d3d3d;
    --li-common-color-gray-500: #2d2d2d;
    --li-common-color-gray-600: #292929;
    --li-common-color-gray-700: #1f1f1f;
    --li-common-color-blue-50: #4191ed;
    --li-common-color-blue-100: #2974ca;
    --li-common-color-green-100: #3d9b3d;
    --li-common-color-orange-100: #c69b20;
    --li-common-color-red-50: #e30f0f;
    --li-common-color-red-100: #b31d1d;

    /* shape */
    --li-common-padding-md: 1.5rem;
    --li-common-border-radius: 4px;
    --li-common-outline: 1px solid var(--li-common-color-blue-50);
    --li-common-outline-shadow: 0 0 6px 0 var(--li-common-color-blue-100);
    --li-common-margin-bottom-spacing: 1.5rem;

    /* base font */
    font-size: 16px;
  }
`;
