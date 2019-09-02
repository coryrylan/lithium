import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Layout } from './common/enums';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Lithium JS - Web Component Library', layout: Layout.Page } },
  {
    path: 'docs',
    loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule),
    data: { title: 'Lithium - Documentation', layout: Layout.Docs }
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
    data: { title: 'Lithium - About', layout: Layout.Page }
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then(m => m.SupportModule),
    data: { title: 'Lithium - Support', layout: Layout.Page }
  },
  {
    path: 'api',
    loadChildren: () => import('./api/api.module').then(m => m.ApiModule),
    data: { title: 'Lithium - API Reference', layout: Layout.Page }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
