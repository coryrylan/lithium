import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ApiComponent } from './api.component';
import { ApiRoutingModule } from './api-routing.module';
import { SharedModule } from '../common/shared/shared.module';

@NgModule({
  declarations: [ApiComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    ApiRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApiModule { }
