import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { addDays } from 'date-fns';

@Component({
  selector: 'app-docs-datepicker',
  templateUrl: './docs-datepicker.component.html'
})
export class DocsDatepickerComponent {
  myDate = new Date();
  dates = [new Date(), addDays(new Date(), 5)];

  defaultDate = new FormControl('2019-10-08');
  defaultDateValue = '2019-10-08';

  inlineDate = new FormControl('2019-10-08');
  inlineDateValue = '2019-10-08';

  startDate = new FormControl('2019-10-08');
  endDate = new FormControl('2019-10-14');
  startDateValue = '2019-10-08';
  endDateValue = '2019-10-14';

  codeExampleImport = `
    import 'lithium-ui/datepicker';
  `;

  codeExampleHtml = `
    <li-datepicker>
      <label>Date</label>
      <input type="date" [formControl]="startDate" (change)="val = $event.target.value" />
    </li-datepicker>

    <li-datepicker>
      <label>Start Date</label>
      <input type="date" />

      <label>End Date</label>
      <input type="date" />
    </li-datepicker>
  `;
}
