import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-docs-radio',
  templateUrl: './docs-radio.component.html'
})
export class DocsRadioComponent {
  form: FormGroup;
  value: Observable<string>;

  codeExampleImport = `
    import 'lithium-ui/radio';
  `;

  codeExampleHtml = `
    <li-radio-group name="region">
      <legend>Choose a Country</legend>
      <li-radio>
        <input type="radio" value="north-america" />
        <label>North America</label>
      </li-radio>
      <li-radio>
        <input type="radio" value="south-america" />
        <label>South America</label>
      </li-radio>
      <li-radio>
        <input type="radio" value="europe" />
        <label>Europe</label>
      </li-radio>
      <li-radio>
        <input type="radio" value="disabled" disabled />
        <label>Disabled</label>
      </li-radio>
    </li-radio-group>
  `;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      region: ['south-america']
    });

    this.value = this.form.valueChanges.pipe(
      startWith('south-america'),
      map(() => this.form.value)
    );
  }
}
