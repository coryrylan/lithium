import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../common/shared/shared.module';
import { DocsHomeComponent } from './docs-home/docs-home.component';
import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [DocsComponent, DocsHomeComponent],
  imports: [CommonModule, SharedModule, DocsRoutingModule]
})
export class DocsModule {}
