import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Layout } from '../common/enums';
import { DocsButtonComponent } from './docs-button/docs-button.component';
import { DocsCardComponent } from './docs-card/docs-card.component';
import { DocsCheckboxComponent } from './docs-checkbox/docs-checkbox.component';
import { DocsDatalistComponent } from './docs-datalist/docs-datalist.component';
import { DocsFormsComponent } from './docs-forms/docs-forms.component';
import { DocsHomeComponent } from './docs-home/docs-home.component';
import { DocsI18nComponent } from './docs-i18n/docs-i18n.component';
import { DocsIconsComponent } from './docs-icons/docs-icons.component';
import { DocsInputComponent } from './docs-input/docs-input.component';
import { DocsLoadingSpinnerComponent } from './docs-loading-spinner/docs-loading-spinner.component';
import { DocsMessageComponent } from './docs-message/docs-message.component';
import { DocsModalComponent } from './docs-modal/docs-modal.component';
import { DocsNavBarComponent } from './docs-nav-bar/docs-nav-bar.component';
import { DocsProgressBarComponent } from './docs-progress-bar/docs-progress-bar.component';
import { DocsRadioComponent } from './docs-radio/docs-radio.component';
import { DocsSelectComponent } from './docs-select/docs-select.component';
import { DocsSideNavComponent } from './docs-side-nav/docs-side-nav.component';
import { DocsTabsComponent } from './docs-tabs/docs-tabs.component';
import { DocsTextareaComponent } from './docs-textarea/docs-textarea.component';
import { DocsThemesComponent } from './docs-themes/docs-themes.component';
import { DocsComponent } from './docs.component';

const routes: Routes = [
  {
    path: '',
    component: DocsComponent,
    children: [
      { path: '', component: DocsHomeComponent, data: { title: 'Lithium Web Components - Documentation', layout: Layout.Docs } },
      { path: 'themes', component: DocsThemesComponent, data: { title: 'Lithium Progress Themes - Documentation', layout: Layout.Docs } },
      {
        path: 'internationalization',
        component: DocsI18nComponent,
        data: { title: 'Lithium Internationalization (i18n) - Documentation', layout: Layout.Docs }
      },
      {
        path: 'button',
        component: DocsButtonComponent,
        data: { title: 'Lithium Button Web Component - Documentation', layout: Layout.Docs }
      },
      { path: 'card', component: DocsCardComponent, data: { title: 'Lithium Card Web Component - Documentation', layout: Layout.Docs } },
      {
        path: 'checkbox',
        component: DocsCheckboxComponent,
        data: { title: 'Lithium Checkbox Web Component - Documentation', layout: Layout.Docs }
      },
      { path: 'datalist', component: DocsDatalistComponent, data: { title: 'Lithium Datalist Component - Documentation', layout: Layout.Docs } },
      { path: 'forms', component: DocsFormsComponent, data: { title: 'Lithium Forms Web Component - Documentation', layout: Layout.Docs } },
      { path: 'icons', component: DocsIconsComponent, data: { title: 'Lithium Icons Web Component - Documentation', layout: Layout.Docs } },
      { path: 'input', component: DocsInputComponent, data: { title: 'Lithium Input Web Component - Documentation', layout: Layout.Docs } },
      {
        path: 'nav-bar',
        component: DocsNavBarComponent,
        data: { title: 'Lithium Nav Bar Web Component - Documentation', layout: Layout.Docs }
      },
      { path: 'modal', component: DocsModalComponent, data: { title: 'Lithium Modal Web Component - Documentation', layout: Layout.Docs } },
      {
        path: 'radio',
        component: DocsRadioComponent,
        data: { title: 'Lithium Side Radio Component - Documentation', layout: Layout.Docs }
      },
      {
        path: 'side-nav',
        component: DocsSideNavComponent,
        data: { title: 'Lithium Side Nav Web Component - Documentation', layout: Layout.Docs }
      },
      {
        path: 'select',
        component: DocsSelectComponent,
        data: { title: 'Lithium Select Web Component - Documentation', layout: Layout.Docs }
      },
      { path: 'tabs', component: DocsTabsComponent, data: { title: 'Lithium Tabs Web Component - Documentation', layout: Layout.Docs } },
      {
        path: 'textarea',
        component: DocsTextareaComponent,
        data: { title: 'Lithium Textarea Web Component - Documentation', layout: Layout.Docs }
      },
      {
        path: 'loading-spinner',
        component: DocsLoadingSpinnerComponent,
        data: { title: 'Lithium Loading Spinner Web Component - Documentation', layout: Layout.Docs }
      },
      {
        path: 'message',
        component: DocsMessageComponent,
        data: { title: 'Lithium Message Web Component - Documentation', layout: Layout.Docs }
      },
      {
        path: 'progress-bar',
        component: DocsProgressBarComponent,
        data: { title: 'Lithium Progress Bar Web Component - Documentation', layout: Layout.Docs }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule {}
