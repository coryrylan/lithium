import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocsNavBarComponent } from './docs-nav-bar.component';

const routes: Routes = [{ path: '', component: DocsNavBarComponent }];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule.forChild(routes), CommonModule],
  declarations: [DocsNavBarComponent]
})
export class DocsNavBarModule {}
