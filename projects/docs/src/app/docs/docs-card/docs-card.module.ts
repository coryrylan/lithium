import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocsCardComponent } from './docs-card.component';

const routes: Routes = [{ path: '', component: DocsCardComponent }];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule.forChild(routes), CommonModule],
  declarations: [DocsCardComponent]
})
export class DocsCardModule {}
