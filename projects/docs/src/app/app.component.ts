import { Component } from '@angular/core';
import { IconService, menuIcon } from 'lithium-ui/icons';
IconService.addIcons(menuIcon);

import { RouterMetaDataService } from './common/core/services/router-metadata.service';
import { fadeAnimation } from './common/animations';
import { ThemeService } from './common/core/services/theme.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  version = environment.version;
  sticky = false;
  openMenu = false;

  constructor(
    private routerMetaDataService: RouterMetaDataService,
    private themeService: ThemeService) {
    this.routerMetaDataService.init().subscribe();
    this.themeService.init();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMenu() {
    this.openMenu = !this.openMenu;
  }
}
