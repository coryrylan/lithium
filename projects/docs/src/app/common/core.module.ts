import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterMetaDataService } from './services/router-metadata.service';
import { ThemeService } from './services/theme.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [
    RouterMetaDataService,
    ThemeService
  ],
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded');
    }
  }
}
