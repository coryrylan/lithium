import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocsProgressBarComponent } from './docs-progress.component';

const routes: Routes = [{ path: '', component: DocsProgressBarComponent }];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule.forChild(routes), CommonModule],
  declarations: [DocsProgressBarComponent]
})
export class DocsProgressBarModule {}
