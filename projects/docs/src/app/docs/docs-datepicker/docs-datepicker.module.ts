import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocsDatepickerComponent } from './docs-datepicker.component';

const routes: Routes = [{ path: '', component: DocsDatepickerComponent }];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule.forChild(routes), CommonModule],
  declarations: [DocsDatepickerComponent]
})
export class DocsDatepickerModule {}
