import { Component } from '@angular/core';

@Component({
  selector: 'app-docs-textarea',
  templateUrl: './docs-textarea.component.html'
})
export class DocsTextareaComponent {
  codeExampleImport = `
    import 'lithium-ui/textarea';
  `;

  codeExampleHtml = `
    <li-textarea>
      <label>Description</label>
      <textarea></textarea>
      <li-input-message>Maximum of 100 characters.</li-input-message>
      <li-input-error>Required</li-input-error>
    </li-textarea>

    <li-textarea error>
      <label>Description</label>
      <textarea></textarea>
      <li-input-message>Maximum of 100 characters.</li-input-message>
      <li-input-error>Required</li-input-error>
    </li-textarea>
  `;
}
