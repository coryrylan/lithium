import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocsCheckboxComponent } from './docs-checkbox.component';

const routes: Routes = [{ path: '', component: DocsCheckboxComponent }];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule.forChild(routes), CommonModule],
  declarations: [DocsCheckboxComponent]
})
export class DocsCheckboxModule {}
