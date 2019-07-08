import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocsComponent } from './docs/docs.component';
import { DocsHomeComponent } from './docs-home/docs-home.component';
import { DocsIconsComponent } from './docs-icons/docs-icons.component';
import { DocsModalComponent } from './docs-modal/docs-modal.component';
import { DocsSideNavComponent } from './docs-side-nav/docs-side-nav.component';
import { DocsNavBarComponent } from './docs-nav-bar/docs-nav-bar.component';
import { DocsTabsComponent } from './docs-tabs/docs-tabs.component';
import { DocsLoadingSpinnerComponent } from './docs-loading-spinner/docs-loading-spinner.component';
import { DocsProgressBarComponent } from './docs-progress-bar/docs-progress-bar.component';
import { Layout } from '../common/enums';

const routes: Routes = [
  {
    path: '', component: DocsComponent, children: [
      { path: '', component: DocsHomeComponent, data: { title: 'Lithium Web Components - Documentation', layout: Layout.Docs } },
      { path: 'icons', component: DocsIconsComponent, data: { title: 'Lithium Icons Web Component - Documentation', layout: Layout.Docs } },
      { path: 'modal', component: DocsModalComponent, data: { title: 'Lithium Modal Web Component - Documentation', layout: Layout.Docs } },
      { path: 'side-nav', component: DocsSideNavComponent, data: { title: 'Lithium Side Nav Web Component - Documentation', layout: Layout.Docs } },
      { path: 'nav-bar', component: DocsNavBarComponent, data: { title: 'Lithium Nav Bar Web Component - Documentation', layout: Layout.Docs } },
      { path: 'tabs', component: DocsTabsComponent, data: { title: 'Lithium Tabs Web Component - Documentation', layout: Layout.Docs } },
      { path: 'loading-spinner', component: DocsLoadingSpinnerComponent, data: { title: 'Lithium Loading Spinner Web Component - Documentation', layout: Layout.Docs } },
      { path: 'progress-bar', component: DocsProgressBarComponent, data: { title: 'Lithium Progress Bar Web Component - Documentation', layout: Layout.Docs } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }
