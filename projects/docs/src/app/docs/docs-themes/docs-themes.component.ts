import { Component, OnInit } from '@angular/core';

import { ThemeService } from '../../common/services/theme.service';

@Component({
  selector: 'app-docs-themes',
  templateUrl: './docs-themes.component.html'
})
export class DocsThemesComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

}
