import { Component } from '@angular/core';

@Component({
  selector: 'app-docs-checkbox',
  templateUrl: './docs-checkbox.component.html'
})
export class DocsCheckboxComponent {
  codeExampleImport = `
    import 'lithium-ui/checkbox';
  `;

  codeExampleHtml = `
    <li-checkbox>
      <input type="checkbox">
      <label>Remember Me</label>
    </li-checkbox>

    <li-checkbox>
      <input type="checkbox" disabled>
      <label>Disabled</label>
    </li-checkbox>

    <li-checkbox-group inline>
      <legend>Select at least one</legend>
      <li-checkbox checked>
        <input type="checkbox" checked>
        <label>Check One</label>
      </li-checkbox>

      <li-checkbox checked>
        <input type="checkbox">
        <label>Check Two</label>
      </li-checkbox>

      <li-checkbox checked>
        <input type="checkbox">
        <label>Check Three</label>
      </li-checkbox>
    </li-checkbox-group>
  `;
}
