import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import 'lithium-ui'; // imports all components
import 'lithium-ui/button';
import 'lithium-ui/card';
import 'lithium-ui/checkbox';
import 'lithium-ui/code-example';
import 'lithium-ui/dropdown';
import 'lithium-ui/form';
import 'lithium-ui/input';
import 'lithium-ui/loading-spinner';
import 'lithium-ui/message';
import 'lithium-ui/modal';
import 'lithium-ui/nav-bar';
import 'lithium-ui/progress-bar';
import 'lithium-ui/radio';
import 'lithium-ui/select';
import 'lithium-ui/side-nav';
import 'lithium-ui/tabs';
import 'lithium-ui/textarea';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './common/core/core.module';
import { SharedModule } from './common/shared/shared.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, CoreModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
