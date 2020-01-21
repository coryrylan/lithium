import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../common/shared/shared.module';
import { DocsRadioComponent } from './docs-radio.component';

const routes: Routes = [{ path: '', component: DocsRadioComponent }];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
  declarations: [DocsRadioComponent]
})
export class DocsRadioModule {}
