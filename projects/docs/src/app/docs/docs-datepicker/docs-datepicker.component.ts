import { Component } from '@angular/core';
import { addDays } from 'date-fns';

@Component({
  selector: 'app-docs-datepicker',
  templateUrl: './docs-datepicker.component.html'
})
export class DocsDatepickerComponent {
  myDate = new Date();
  dates = [new Date(), addDays(new Date(), 5)];

  codeExampleImport = `
    import 'lithium-ui/datepicker';
  `;

  codeExampleHtml = `

  `;
}
