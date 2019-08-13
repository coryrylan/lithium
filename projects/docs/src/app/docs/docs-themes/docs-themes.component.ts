import { Component, OnInit } from '@angular/core';

import { ThemeService } from '../../common/services/theme.service';

@Component({
  selector: 'app-docs-themes',
  templateUrl: './docs-themes.component.html'
})
export class DocsThemesComponent implements OnInit {
  codeExample = `
    li-card {
      --li-card-background-color: #ccc;
      --li-card-border-color: #2d2d2d;
    }
  `;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

}
