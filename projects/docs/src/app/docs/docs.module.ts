import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DocsComponent } from './docs/docs.component';
import { DocsHomeComponent } from './docs-home/docs-home.component';
import { DocsRoutingModule } from './docs-routing.module';
import { DocsModalComponent } from './docs-modal/docs-modal.component';
import { DocsSideNavComponent } from './docs-side-nav/docs-side-nav.component';
import { DocsNavBarComponent } from './docs-nav-bar/docs-nav-bar.component';
import { DocsTabsComponent } from './docs-tabs/docs-tabs.component';
import { DocsLoadingSpinnerComponent } from './docs-loading-spinner/docs-loading-spinner.component';
import { DocsProgressBarComponent } from './docs-progress-bar/docs-progress-bar.component';
import { DocsIconsComponent } from './docs-icons/docs-icons.component';
import { DocsThemesComponent } from './docs-themes/docs-themes.component';
import { DocsI18nComponent } from './docs-i18n/docs-i18n.component';
import { DocsCardComponent } from './docs-card/docs-card.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    DocsComponent,
    DocsHomeComponent,
    DocsCardComponent,
    DocsIconsComponent,
    DocsModalComponent,
    DocsSideNavComponent,
    DocsNavBarComponent,
    DocsTabsComponent,
    DocsLoadingSpinnerComponent,
    DocsProgressBarComponent,
    DocsThemesComponent,
    DocsI18nComponent
  ],
  imports: [
    CommonModule,
    DocsRoutingModule,
    ReactiveFormsModule
  ]
})
export class DocsModule { }
