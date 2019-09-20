import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { RouterMetaDataService } from './services/router-metadata.service';
import { ThemeService } from './services/theme.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [RouterMetaDataService, ThemeService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded');
    }
  }
}
