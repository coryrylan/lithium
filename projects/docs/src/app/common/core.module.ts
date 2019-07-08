import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterMetaDataService } from './services/router-metadata.service';

@NgModule({
  imports: [
    BrowserModule,
  ],
  providers: [RouterMetaDataService],
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded');
    }
  }
}
