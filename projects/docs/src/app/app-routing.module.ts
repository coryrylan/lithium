import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Layout } from './common/enums';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Lithium JS - Web Component Library', layout: Layout.Page } },
  { path: 'docs', loadChildren: './docs/docs.module#DocsModule', data: { title: 'Lithium - Documentation', layout: Layout.Docs } },
  { path: 'about', loadChildren: './about/about.module#AboutModule', data: { title: 'Lithium - About', layout: Layout.Page } },
  { path: 'support', loadChildren: './support/support.module#SupportModule', data: { title: 'Lithium - Support', layout: Layout.Page } },
  { path: 'api', loadChildren: './api/api.module#ApiModule', data: { title: 'Lithium - API Reference', layout: Layout.Page } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
