/* tslint:disable */

export interface SVGIcon {
  svg: string;
  name: string;
}

export interface SVGIconCollection {
  icons: SVGIcon[];
}

export const closeIcon = {
  svg:
    '<svg class="li-icon-close" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><path d="M19.41 18l7.29-7.29a1 1 0 0 0-1.41-1.41L18 16.59l-7.29-7.3A1 1 0 0 0 9.3 10.7l7.29 7.3-7.3 7.29a1 1 0 1 0 1.41 1.41l7.3-7.29 7.29 7.29a1 1 0 0 0 1.41-1.41z"/></svg>',
  name: 'close'
};

export const unknownIcon = {
  svg:
    '<svg class="li-icon-unknown" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><circle cx="17.58" cy="26.23" r="1.4"/><path d="M24.7 13a5.18 5.18 0 0 0-2.16-3.56 7.26 7.26 0 0 0-5.71-1.09A11.34 11.34 0 0 0 12 10.44 1 1 0 1 0 13.26 12a9.32 9.32 0 0 1 3.94-1.72 5.29 5.29 0 0 1 4.16.74 3.21 3.21 0 0 1 1.35 2.19c.33 2.69-3.19 3.75-5.32 4.14l-.82.15v4.36a1 1 0 0 0 2 0v-2.69c6.04-1.38 6.31-4.76 6.13-6.17z"/></svg>',
  name: 'unknown'
};

export const menuIcon = {
  svg:
    '<svg class="li-icon-menu" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><path d="M32 29H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2zM32 19H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2zM32 9H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2z"/></svg>',
  name: 'menu'
};

export const infoIcon = {
  svg:
    '<svg class="li-icon-info" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-36 344h12V232h-12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h48c6.627 0 12 5.373 12 12v140h12c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-72c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12zm36-240c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z"/></svg>',
  name: 'info'
};

export const checkIcon = {
  svg:
    '<svg class="li-icon-check" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"/></svg>',
  name: 'check'
};

export const errorIcon = {
  svg:
    '<svg class="li-icon-error" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zM103.265 408.735c-80.622-80.622-84.149-208.957-10.9-293.743l304.644 304.643c-84.804 73.264-213.138 69.706-293.744-10.9zm316.37-11.727L114.992 92.365c84.804-73.263 213.137-69.705 293.743 10.9 80.622 80.621 84.149 208.957 10.9 293.743z"/></svg>',
  name: 'error'
};

export const warningIcon = {
  svg:
    '<svg class="li-icon-warning" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M270.2 160h35.5c3.4 0 6.1 2.8 6 6.2l-7.5 196c-.1 3.2-2.8 5.8-6 5.8h-20.5c-3.2 0-5.9-2.5-6-5.8l-7.5-196c-.1-3.4 2.6-6.2 6-6.2zM288 388c-15.5 0-28 12.5-28 28s12.5 28 28 28 28-12.5 28-28-12.5-28-28-28zm281.5 52L329.6 24c-18.4-32-64.7-32-83.2 0L6.5 440c-18.4 31.9 4.6 72 41.6 72H528c36.8 0 60-40 41.5-72zM528 480H48c-12.3 0-20-13.3-13.9-24l240-416c6.1-10.6 21.6-10.7 27.7 0l240 416c6.2 10.6-1.5 24-13.8 24z"/></svg>',
  name: 'warning'
};

export const testIcon = {
  svg: '<svg class="li-icon-test" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12"/></svg>',
  name: 'test'
};

export const allIconsCollection = {
  name: 'all',
  icons: [closeIcon, unknownIcon, menuIcon, testIcon]
};
