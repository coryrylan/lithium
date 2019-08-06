import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { ThemeAPIComponent } from './components/theme-api.component';
import { ClassAPIComponent } from './components/class-api.component';

const components = [
  ClassAPIComponent,
  ThemeAPIComponent
];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
