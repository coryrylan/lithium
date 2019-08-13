import { Component } from '@angular/core';

@Component({
  selector: 'app-docs-card',
  templateUrl: './docs-card.component.html'
})
export class DocsCardComponent {
  codeExampleImport = `
    import 'lithium-ui/card';
  `;

  codeExampleHtml = `
    <li-card>
      <h2>Hello World</h2>
    </li-card>
  `;
}
