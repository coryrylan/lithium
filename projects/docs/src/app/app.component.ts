import { Component } from '@angular/core';
import { IconService } from 'lithium-ui/icon';
import { menuIcon } from 'lithium-ui/icon-shapes';
IconService.addIcons(menuIcon);

import { environment } from '../environments/environment';
import { fadeAnimation } from './common/animations';
import { RouterMetaDataService } from './common/core/services/router-metadata.service';
import { ThemeService } from './common/core/services/theme.service';

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

  constructor(private routerMetaDataService: RouterMetaDataService, private themeService: ThemeService) {
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
