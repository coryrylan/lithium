import { Component } from '@angular/core';

@Component({
  selector: 'app-docs-select',
  templateUrl: './docs-select.component.html'
})
export class DocsSelectComponent {
  codeExampleImport = `
    import 'lithium-ui/select';
  `;

  codeExampleHtml = `
    <li-select>
      <label>Select an Option</label>
      <select>
        <option>Option One</option>
        <option>Option Two</option>
        <option>Option Three</option>
      </select>
    </li-select>

    <li-select error>
      <label>Select an Option</label>
      <select>
        <option>Option One</option>
        <option>Option Two</option>
        <option>Option Three</option>
      </select>
      <li-input-error>At least one must be selected.</li-input-error>
    </li-select>

    <li-select>
      <label>Disabled</label>
      <select disabled>
        <option>Option One</option>
        <option>Option Two</option>
        <option>Option Three</option>
      </select>
    </li-select>
  `;
}

