import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { ThemeAPIComponent } from './components/theme-api/theme-api.component';
import { ClassAPIComponent } from './components/class-api/class-api.component';
import { ComponentApiComponent } from './components/component-api/component-api.component';
import { BookComponent } from './components/book/book.component';

const components = [ComponentApiComponent, ClassAPIComponent, ThemeAPIComponent, BookComponent];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  declarations: [...components, ComponentApiComponent],
  exports: [...components]
})
export class SharedModule {}
