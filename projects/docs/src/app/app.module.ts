import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import 'lithium-ui'; // imports all components
import 'lithium-ui/button';
import 'lithium-ui/card';
import 'lithium-ui/dropdown';
import 'lithium-ui/modal';
import 'lithium-ui/side-nav';
import 'lithium-ui/nav-bar';
import 'lithium-ui/tabs';
import 'lithium-ui/loading-spinner';
import 'lithium-ui/message';
import 'lithium-ui/progress-bar';
import 'lithium-ui/code-example';
import 'lithium-ui/input';
import 'lithium-ui/textarea';
import 'lithium-ui/select';
import 'lithium-ui/checkbox';
import 'lithium-ui/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './common/core/core.module';
import { SharedModule } from './common/shared/shared.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
