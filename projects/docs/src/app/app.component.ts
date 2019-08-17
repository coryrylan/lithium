import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import ResizeObserver from 'resize-observer-polyfill';
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
export class AppComponent implements OnInit, OnDestroy {
  version = environment.version;
  sticky = false;
  openMenu = false;
  subscriptions: Subscription[] = [];

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
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

  ngOnInit() {
    const sizeUpdate = new Subject<boolean>();
    const resizeObserver = new ResizeObserver(entries => sizeUpdate.next(entries[0].contentRect.width > 1024));

    this.subscriptions.push(sizeUpdate.pipe(
      distinctUntilChanged()
    ).subscribe(largeLayout => {
      this.sticky = largeLayout;
      this.changeDetectorRef.detectChanges();
    }));

    resizeObserver.observe(document.body);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
