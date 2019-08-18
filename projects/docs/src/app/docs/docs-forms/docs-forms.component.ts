import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-docs-forms',
  templateUrl: './docs-forms.component.html'
})
export class DocsFormsComponent {
  form: FormGroup;

  codeExampleImport = `
    import 'lithium-ui/card';
  `;

  codeExampleHtml = `
    <li-form>
      <form>
        <li-input>
          <label>Email</label>
          <input type="email" />
          <li-input-message>Must be a active account.</li-input-message>
          <li-input-error>Required</li-input-error>
          <li-input-error>Invalid Email</li-input-error>
        </li-input>

        <li-textarea>
          <label>Description</label>
          <textarea></textarea>
          <li-input-message>Maximum of 100 characters.</li-input-message>
          <li-input-error>Required</li-input-error>
        </li-textarea>

        <li-select>
          <label>Select an Option</label>
          <select>
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
          </select>
        </li-select>

        <div bp="grid 6@md">
          <li-checkbox-group inline>
            <legend>Select a item</legend>
            <li-checkbox>
              <input type="checkbox" />
              <label>Checkbox One</label>
            </li-checkbox>
            <li-checkbox>
              <input type="checkbox" />
              <label>Checkbox Two</label>
            </li-checkbox>
          </li-checkbox-group>

          <li-radio-group name="region" inline>
            <legend>Choose a Country</legend>
            <li-radio>
              <input type="radio" value="north-america" checked />
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
          </li-radio-group>
        </div>
        <li-button bp="float-right">Save</li-button>
      </form>
    </li-form>
  `;

  get emailIsInvalidAndTouched() {
    return this.form.controls.email.errors && this.form.controls.email.errors.email && this.form.controls.email.touched;
  }

  get emailIsRequiredAndTouched() {
    return this.form.controls.email.errors && this.form.controls.email.errors.required && this.form.controls.email.touched;
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      description: ['', Validators.max(100)],
      select: [],
      checkboxOne: [],
      checkboxTwo: [],
      radioGroup: []
    });
  }

  submit() {
    console.log(this.form.value);
  }
}
