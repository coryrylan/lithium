import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, PricingRoutingModule],
  declarations: [PricingComponent]
})
export class PricingModule {}
