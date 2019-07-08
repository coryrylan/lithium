import { Component } from '@angular/core';

import { IconService, closeIcon, menuIcon } from 'lithium-ui/icons';
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
    import { IconService, allIconsGroup } from 'lithium-ui/icons';
    IconService.addIconGroups(allIconsGroup);
  `;
}
