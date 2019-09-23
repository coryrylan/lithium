import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-docs-datalist',
  templateUrl: './docs-datalist.component.html'
})
export class DocsDatalistComponent {
  form: FormGroup;

  codeExampleImport = `
    import 'lithium-ui/datalist';
  `;

  codeExampleHtml = `
    <li-datalist>
      <label>Choose a browser:</label>
      <input formControlName="search" />
      <datalist>
        <option value="Chrome"> </option>
        <option value="Firefox"> </option>
        <option value="Internet Explorer"> </option>
        <option value="Opera"> </option>
        <option value="Safari"> </option>
        <option value="Microsoft Edge"> </option>
      </datalist>
    </li-datalist>
  `;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      search: ['']
    });
  }

  submit() {
    console.log(this.form.value);
  }
}
