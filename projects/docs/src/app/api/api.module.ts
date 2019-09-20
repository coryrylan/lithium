import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../common/shared/shared.module';
import { ApiRoutingModule } from './api-routing.module';
import { ApiComponent } from './api.component';

@NgModule({
  declarations: [ApiComponent],
  imports: [CommonModule, SharedModule, HttpClientModule, ReactiveFormsModule, ApiRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApiModule {}
