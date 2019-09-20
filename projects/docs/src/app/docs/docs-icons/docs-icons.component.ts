import { Component } from '@angular/core';

import { closeIcon, IconService, menuIcon } from 'lithium-ui/icons';
IconService.addIcons(closeIcon, menuIcon);

@Component({
  selector: 'app-docs-icons',
  templateUrl: './docs-icons.component.html'
})
export class DocsIconsComponent {
  codeExample = `
    import { IconService, closeIcon, menuIcon } from 'lithium-ui/icons';
    IconService.addIcons(closeIcon, menuIcon);
  `;

  codeExample2 = `
    <li-icon name="close"></li-icon>
    <li-icon name="menu"></li-icon>
  `;

  codeExample3 = `
    import { IconService, allIconsCollection } from 'lithium-ui/icons';
    IconService.addIconCollections(allIconsCollection);
  `;

  codeExample4 = `
    import { IconService } from 'lithium-ui/icons';

    const customIcon = {
      name: 'circle',
      svg: '<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12"/></svg>'
    };

    IconService.addIcons(customIcon);
  `;

  codeExample5 = `
    <li-icon name="warning" title="CPU Usage High"></li-icon>
  `;

  constructor() {
    const customIcon = {
      name: 'circle',
      svg: `<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12"/></svg>`
    };

    IconService.addIcons(customIcon);
  }
}
