import { Component } from '@angular/core';

@Component({
  selector: 'app-docs-input',
  templateUrl: './docs-input.component.html'
})
export class DocsInputComponent {
  codeExampleImport = `
    import 'lithium-ui/input';
  `;

  codeExampleHtml = `
    <li-input>
      <label>Email</label>
      <input type="email" />
      <li-input-message>Must be a active account.</li-input-message>
      <li-input-error>Invalid</li-input-error>
    </li-input>

    <li-input error>
      <label>Age</label>
      <input type="number" />
      <li-input-message>Must be 18 years or older.</li-input-message>
      <li-input-error>Required</li-input-error>
    </li-input>

    <li-textarea>
      <label>Description</label>
      <textarea></textarea>
      <li-input-message>Maximum of 100 characters.</li-input-message>
    </li-textarea>
  `;
}

