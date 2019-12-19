import { Component } from '@angular/core';

@Component({
  selector: 'app-docs-progress',
  templateUrl: './docs-progress.component.html'
})
export class DocsProgressBarComponent {
  codeExampleImport = `
    import 'lithium-ui/progress';
  `;

  codeExampleHtml = `
    <li-progress value="65"></li-progress>
  `;
}
