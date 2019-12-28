import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../common/shared/shared.module';
import { DocsButtonComponent } from './docs-button/docs-button.component';
import { DocsCardComponent } from './docs-card/docs-card.component';
import { DocsCheckboxComponent } from './docs-checkbox/docs-checkbox.component';
import { DocsDatalistComponent } from './docs-datalist/docs-datalist.component';
import { DocsDatepickerComponent } from './docs-datepicker/docs-datepicker.component';
import { DocsFormsComponent } from './docs-forms/docs-forms.component';
import { DocsHomeComponent } from './docs-home/docs-home.component';
import { DocsI18nComponent } from './docs-i18n/docs-i18n.component';
import { DocsIconsComponent } from './docs-icons/docs-icons.component';
import { DocsInputComponent } from './docs-input/docs-input.component';
import { DocsMessageComponent } from './docs-message/docs-message.component';
import { DocsModalComponent } from './docs-modal/docs-modal.component';
import { DocsNavBarComponent } from './docs-nav-bar/docs-nav-bar.component';
import { DocsProgressBarComponent } from './docs-progress/docs-progress.component';
import { DocsRadioComponent } from './docs-radio/docs-radio.component';
import { DocsRoutingModule } from './docs-routing.module';
import { DocsSelectComponent } from './docs-select/docs-select.component';
import { DocsSideNavComponent } from './docs-side-nav/docs-side-nav.component';
import { DocsTabsComponent } from './docs-tabs/docs-tabs.component';
import { DocsTextareaComponent } from './docs-textarea/docs-textarea.component';
import { DocsThemesComponent } from './docs-themes/docs-themes.component';
import { DocsComponent } from './docs.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    DocsComponent,
    DocsHomeComponent,
    DocsButtonComponent,
    DocsCardComponent,
    DocsCheckboxComponent,
    DocsFormsComponent,
    DocsIconsComponent,
    DocsInputComponent,
    DocsModalComponent,
    DocsSideNavComponent,
    DocsNavBarComponent,
    DocsSelectComponent,
    DocsRadioComponent,
    DocsTabsComponent,
    DocsTextareaComponent,
    DocsMessageComponent,
    DocsProgressBarComponent,
    DocsThemesComponent,
    DocsI18nComponent,
    DocsDatalistComponent,
    DocsDatepickerComponent
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, DocsRoutingModule]
})
export class DocsModule {}
