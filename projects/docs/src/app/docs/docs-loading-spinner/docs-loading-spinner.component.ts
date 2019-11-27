import { Component } from '@angular/core';

@Component({
  selector: 'app-docs-loading-spinner',
  templateUrl: './docs-loading-spinner.component.html'
})
export class DocsLoadingSpinnerComponent {
  codeExampleImport = `
    import 'lithium-ui/loading-spinner';
  `;

  codeExampleHtml = `
    <li-loading-spinner size="sm"></li-loading-spinner>
    <li-loading-spinner></li-loading-spinner>
    <li-loading-spinner size="lg"></li-loading-spinner>
  `;
}
