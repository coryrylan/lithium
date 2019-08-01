import { NgModule} from '@angular/core';

import { ThemeAPIComponent } from './components/theme-api.component';
import { ClassAPIComponent } from './components/class-api.component';

const components = [
  ClassAPIComponent,
  ThemeAPIComponent
];

@NgModule({
  imports: [],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
