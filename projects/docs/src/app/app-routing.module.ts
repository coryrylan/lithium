import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Layout } from './common/enums';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Lithium UI - Web Component Library', layout: Layout.Page } },
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
  },
  {
    path: 'pricing',
    loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule),
    data: { title: 'Lithium - Pricing', layout: Layout.Page }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
