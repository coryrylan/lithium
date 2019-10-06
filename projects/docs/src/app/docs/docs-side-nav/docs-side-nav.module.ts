import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocsSideNavComponent } from './docs-side-nav.component';

const routes: Routes = [{ path: '', component: DocsSideNavComponent }];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule.forChild(routes), CommonModule],
  declarations: [DocsSideNavComponent]
})
export class DocsSideNavModule {}
