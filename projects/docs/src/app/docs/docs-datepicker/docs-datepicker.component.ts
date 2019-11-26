import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { addDays, format, subDays } from 'date-fns';

@Component({
  selector: 'app-docs-datepicker',
  templateUrl: './docs-datepicker.component.html'
})
export class DocsDatepickerComponent {
  private today = new Date();
  defaultDate = new FormControl(format(this.today, 'yyyy-MM-dd'));

  inlineDateValue = format(this.today, 'yyyy-MM-dd'); // set by (change) event which Angular forms doesn't use but rather (input).
  inlineDate = new FormControl(this.inlineDateValue);

  minMaxDate = new FormControl(format(this.today, 'yyyy-MM-dd'));
  minDate = format(subDays(this.today, 3), 'yyyy-MM-dd');
  maxDate = format(addDays(this.today, 3), 'yyyy-MM-dd');

  startDate = new FormControl(format(subDays(this.today, 3), 'yyyy-MM-dd'));
  endDate = new FormControl(format(addDays(this.today, 3), 'yyyy-MM-dd'));

  codeExampleImport = `
    import 'lithium-ui/datepicker';
  `;

  codeExampleHtml = `
    <li-datepicker>
      <label>Date</label>
      <input type="date" />
    </li-datepicker>

    <li-datepicker inline>
      <label>Date Inline</label>
      <input type="date" />
    </li-datepicker>

    <li-datepicker>
      <label>Start Date</label>
      <input type="date" />

      <label>End Date</label>
      <input type="date" />
    </li-datepicker>

    <li-datepicker min="2019-10-04" max="2019-10-16">
      <label>Min/Max Date</label>
      <input type="date" />
    </li-datepicker>
  `;
}
