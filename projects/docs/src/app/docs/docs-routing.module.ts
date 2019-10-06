import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Layout } from '../common/enums';
import { DocsHomeComponent } from './docs-home/docs-home.component';
import { DocsModalComponent } from './docs-modal/docs-modal.component';
import { DocsComponent } from './docs.component';

const routes: Routes = [
  {
    path: '',
    component: DocsComponent,
    children: [
      { path: '', component: DocsHomeComponent, data: { title: 'Lithium Web Components - Documentation', layout: Layout.Docs } },
      {
        path: 'themes',
        data: { title: 'Lithium Progress Themes - Documentation', layout: Layout.Docs },
        loadChildren: () => import('./docs-themes/docs-themes.module').then(m => m.DocsThemesModule)
      },
      {
        path: 'internationalization',
        data: { title: 'Lithium Internationalization (i18n) - Documentation', layout: Layout.Docs },
        loadChildren: () => import('./docs-i18n/docs-i18n.module').then(m => m.DocsI18nModule)
      },
      {
        path: 'button',
        data: { title: 'Lithium Button Web Component - Documentation', layout: Layout.Docs },
        loadChildren: () => import('./docs-button/docs-button.module').then(m => m.DocsButtonModule)
      },
      {
        path: 'card',
        data: { title: 'Lithium Card Web Component - Documentation', layout: Layout.Docs },
        loadChildren: () => import('./docs-card/docs-card.module').then(m => m.DocsCardModule)
      },
      {
        path: 'checkbox',
        data: { title: 'Lithium Checkbox Web Component - Documentation', layout: Layout.Docs },
        loadChildren: () => import('./docs-checkbox/docs-checkbox.module').then(m => m.DocsCheckboxModule)
      },
      {
        path: 'datalist',
        data: { title: 'Lithium Datalist Component - Documentation', layout: Layout.Docs },
        loadChildren: () => import('./docs-datalist/docs-datalist.module').then(m => m.DocsDatalistModule)
      },
      {
        path: 'datepicker',
        data: { title: 'Lithium Datepicker Component - Documentation', layout: Layout.Docs },
        loadChildren: () => import('./docs-datepicker/docs-datepicker.module').then(m => m.DocsDatepickerModule)
      },
      {
        path: 'forms',
        data: { title: 'Lithium Forms Web Component - Documentation', layout: Layout.Docs },
        loadChildren: () => import('./docs-forms/docs-forms.module').then(m => m.DocsFormsModule)
      },
      {
        path: 'icons',
        data: { title: 'Lithium Icons Web Component - Documentation', layout: Layout.Docs },
        loadChildren: () => import('./docs-icons/docs-icons.module').then(m => m.DocsIconsModule)
      },
      {
        path: 'input',
        data: { title: 'Lithium Input Web Component - Documentation', layout: Layout.Docs },
        loadChildren: () => import('./docs-input/docs-input.module').then(m => m.DocsInputModule)
      },
      {
        path: 'nav-bar',
        data: { title: 'Lithium Nav Bar Web Component - Documentation', layout: Layout.Docs },
        loadChildren: () => import('./docs-nav-bar/docs-nav-bar.module').then(m => m.DocsNavBarModule)
      },
      {
        path: 'modal',
        component: DocsModalComponent,
        data: { title: 'Lithium Modal Web Component - Documentation', layout: Layout.Docs },
        loadChildren: () => import('./docs-modal/docs-modal.module').then(m => m.DocsModalModule)
      },
      {
        path: 'radio',
        data: { title: 'Lithium Side Radio Component - Documentation', layout: Layout.Docs },
        loadChildren: () => import('./docs-radio/docs-radio.module').then(m => m.DocsRadioModule)
      },
      {
        path: 'side-nav',
        data: { title: 'Lithium Side Nav Web Component - Documentation', layout: Layout.Docs },
        loadChildren: () => import('./docs-side-nav/docs-side-nav.module').then(m => m.DocsSideNavModule)
      },
      {
        path: 'select',
        data: { title: 'Lithium Select Web Component - Documentation', layout: Layout.Docs },
        loadChildren: () => import('./docs-select/docs-select.module').then(m => m.DocsSelectModule)
      },
      {
        path: 'tabs',
        data: { title: 'Lithium Tabs Web Component - Documentation', layout: Layout.Docs },
        loadChildren: () => import('./docs-tabs/docs-tabs.module').then(m => m.DocsTabsModule)
      },
      {
        path: 'textarea',
        data: { title: 'Lithium Textarea Web Component - Documentation', layout: Layout.Docs },
        loadChildren: () => import('./docs-textarea/docs-textarea.module').then(m => m.DocsTextareaModule)
      },
      {
        path: 'loading-spinner',
        data: { title: 'Lithium Loading Spinner Web Component - Documentation', layout: Layout.Docs },
        loadChildren: () => import('./docs-loading-spinner/docs-loading-spinner.module').then(m => m.DocsLoadingSpinnerModule)
      },
      {
        path: 'message',
        data: { title: 'Lithium Message Web Component - Documentation', layout: Layout.Docs },
        loadChildren: () => import('./docs-message/docs-message.module').then(m => m.DocsMessageModule)
      },
      {
        path: 'progress-bar',
        data: { title: 'Lithium Progress Bar Web Component - Documentation', layout: Layout.Docs },
        loadChildren: () => import('./docs-progress-bar/docs-progress-bar.module').then(m => m.DocsProgressBarModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule {}
