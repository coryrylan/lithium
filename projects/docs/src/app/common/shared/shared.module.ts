// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { BookComponent } from './components/book/book.component';
import { ComponentApiComponent } from './components/component-api/component-api.component';
import { ThemeAPIComponent } from './components/theme-api/theme-api.component';

const components = [ComponentApiComponent, ThemeAPIComponent, BookComponent];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  declarations: [...components, ComponentApiComponent],
  exports: [...components]
})
export class SharedModule {}
