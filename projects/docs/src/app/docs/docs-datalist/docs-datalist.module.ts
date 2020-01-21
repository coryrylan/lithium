import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../common/shared/shared.module';
import { DocsDatalistComponent } from './docs-datalist.component';

const routes: Routes = [{ path: '', component: DocsDatalistComponent }];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
  declarations: [DocsDatalistComponent]
})
export class DocsDatalistModule {}
