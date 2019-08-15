import { Component } from '@angular/core';

@Component({
  selector: 'app-docs-forms',
  templateUrl: './docs-forms.component.html'
})
export class DocsFormsComponent {
  codeExampleImport = `
    import 'lithium-ui/card';
  `;

  codeExampleHtml = `
    <form></form>
  `;
}
