import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BookComponent } from './components/book/book.component';
import { ComponentApiComponent } from './components/component-api/component-api.component';
import { ComponentExampleComponent } from './components/component-example/component-example.component';
import { ThemeAPIComponent } from './components/theme-api/theme-api.component';

const components = [ComponentApiComponent, ThemeAPIComponent, BookComponent, ComponentExampleComponent];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [...components, ComponentApiComponent],
  exports: [...components, ReactiveFormsModule]
})
export class SharedModule {}
