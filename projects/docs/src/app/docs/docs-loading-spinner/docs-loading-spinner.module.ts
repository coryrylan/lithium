import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocsLoadingSpinnerComponent } from './docs-loading-spinner.component';

const routes: Routes = [{ path: '', component: DocsLoadingSpinnerComponent }];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule.forChild(routes), CommonModule],
  declarations: [DocsLoadingSpinnerComponent]
})
export class DocsLoadingSpinnerModule {}
