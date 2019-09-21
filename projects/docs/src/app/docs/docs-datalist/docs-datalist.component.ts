import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datalist-forms',
  templateUrl: './docs-datalist.component.html'
})
export class DocsDatalistComponent {
  form: FormGroup;

  codeExampleImport = `
    import 'lithium-ui/datalist';
  `;

  codeExampleHtml = `
    <li-datalist>
      <label>Choose a flavor:</label>
      <input />
      <datalist>
        <option value="Chocolate">
        <option value="Coconut">
        <option value="Mint">
        <option value="Strawberry">
        <option value="Vanilla">
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
