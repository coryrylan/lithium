/* tslint:disable */

export interface SVGIcon {
  svg: string;
  name: string;
};

export interface SVGIconGroup {
  icons: SVGIcon[];
}

export const closeIcon = {
  svg: '<svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" role="img"><path d="M19.41,18l7.29-7.29a1,1,0,0,0-1.41-1.41L18,16.59,10.71,9.29a1,1,0,0,0-1.41,1.41L16.59,18,9.29,25.29a1,1,0,1,0,1.41,1.41L18,19.41l7.29,7.29a1,1,0,0,0,1.41-1.41Z" class="clr-i-outline clr-i-outline-path-1"></path></svg>',
  name: 'close'
};

export const unknownIcon = {
  svg: '<svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" role="img"><circle class="clr-i-outline clr-i-outline-path-1" cx="17.58" cy="26.23" r="1.4"></circle><path class="clr-i-outline clr-i-outline-path-2" d="M24.7,13a5.18,5.18,0,0,0-2.16-3.56,7.26,7.26,0,0,0-5.71-1.09A11.34,11.34,0,0,0,12,10.44,1,1,0,1,0,13.26,12a9.32,9.32,0,0,1,3.94-1.72,5.29,5.29,0,0,1,4.16.74,3.21,3.21,0,0,1,1.35,2.19c.33,2.69-3.19,3.75-5.32,4.14l-.82.15v4.36a1,1,0,0,0,2,0V19.17C24.61,17.79,24.88,14.41,24.7,13Z"></path></svg>',
  name: 'unknown'
};

export const menuIcon = {
  svg: '<svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" role="img"><path class="clr-i-outline clr-i-outline-path-1" d="M32,29H4a1,1,0,0,1,0-2H32a1,1,0,0,1,0,2Z"></path><path class="clr-i-outline clr-i-outline-path-2" d="M32,19H4a1,1,0,0,1,0-2H32a1,1,0,0,1,0,2Z"></path><path class="clr-i-outline clr-i-outline-path-3" d="M32,9H4A1,1,0,0,1,4,7H32a1,1,0,0,1,0,2Z"></path></svg>',
  name: 'menu'
}

export const allIconsGroup = {
  name: 'all',
  icons: [
    closeIcon,
    unknownIcon,
    menuIcon
  ]
}