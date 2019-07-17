import { Component } from '@angular/core';

@Component({
  selector: 'app-docs-card',
  templateUrl: './docs-card.component.html'
})
export class DocsCardComponent {
  codeExample = `
  <li-card>
    <h2>Hello World</h2>
  </li-card>
  `;
}
