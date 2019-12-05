import { Component, OnInit } from '@angular/core';

import { ThemeService } from '../../common/core/services/theme.service';

@Component({
  selector: 'app-docs-themes',
  templateUrl: './docs-themes.component.html'
})
export class DocsThemesComponent implements OnInit {
  codeExample = `
    li-card {
      --background-color: #ccc;
      --border-color: #2d2d2d;
    }
  `;

  globalVarsExample = `
    /* Default global variables and values */
    :root {
      /* default margin bottom spacing for lithium components */
      --li-global-spacing-margin-bottom: 2.4em;
      --li-global-spacing-margin-bottom-small: 1.2em;
      --li-global-spacing-margin-bottom-large: 3.6em;

      /* Global baseline font size for lithium components */
      --li-global-base-font-size: 10px;
    }
  `;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
