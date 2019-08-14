import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DocsComponent } from './docs.component';
import { DocsHomeComponent } from './docs-home/docs-home.component';
import { DocsRoutingModule } from './docs-routing.module';
import { DocsModalComponent } from './docs-modal/docs-modal.component';
import { DocsSideNavComponent } from './docs-side-nav/docs-side-nav.component';
import { DocsNavBarComponent } from './docs-nav-bar/docs-nav-bar.component';
import { DocsTabsComponent } from './docs-tabs/docs-tabs.component';
import { DocsLoadingSpinnerComponent } from './docs-loading-spinner/docs-loading-spinner.component';
import { DocsMessageComponent } from './docs-message/docs-message.component';
import { DocsProgressBarComponent } from './docs-progress-bar/docs-progress-bar.component';
import { DocsIconsComponent } from './docs-icons/docs-icons.component';
import { DocsThemesComponent } from './docs-themes/docs-themes.component';
import { DocsI18nComponent } from './docs-i18n/docs-i18n.component';
import { DocsCardComponent } from './docs-card/docs-card.component';
import { SharedModule } from '../common/shared.module';
import { DocsButtonComponent } from './docs-button/docs-button.component';
import { DocsInputComponent } from './docs-input/docs-input.component';
import { DocsTextareaComponent } from './docs-textarea/docs-textarea.component';
import { DocsSelectComponent } from './docs-select/docs-select.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    DocsComponent,
    DocsHomeComponent,
    DocsButtonComponent,
    DocsCardComponent,
    DocsIconsComponent,
    DocsInputComponent,
    DocsModalComponent,
    DocsSideNavComponent,
    DocsNavBarComponent,
    DocsSelectComponent,
    DocsTabsComponent,
    DocsTextareaComponent,
    DocsLoadingSpinnerComponent,
    DocsMessageComponent,
    DocsProgressBarComponent,
    DocsThemesComponent,
    DocsI18nComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    DocsRoutingModule,
  ]
})
export class DocsModule { }
