import { Component } from '@angular/core';

@Component({
  selector: 'app-docs-progress-bar',
  templateUrl: './docs-progress-bar.component.html'
})
export class DocsProgressBarComponent {
  codeExampleImport = `
    import 'lithium-ui/progress-bar';
  `;

  codeExampleHtml = `
    <li-progress-bar value="65"></li-progress-bar>
  `;
}
