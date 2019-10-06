import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocsTextareaComponent } from './docs-textarea.component';

const routes: Routes = [{ path: '', component: DocsTextareaComponent }];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule.forChild(routes), CommonModule],
  declarations: [DocsTextareaComponent]
})
export class DocsTextareaModule {}
