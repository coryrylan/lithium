import { Component } from '@angular/core';

@Component({
  selector: 'app-docs-progress',
  templateUrl: './docs-progress.component.html'
})
export class DocsProgressBarComponent {
  codeExampleHtml = `
    <li-progress value="65"></li-progress>
    <li-progress value="25" circular"></li-progress>
    <li-progress size="sm" circular intermediate></li-progress>
    <li-progress size="md" circular intermediate></li-progress>
    <li-progress size="lg" circular intermediate></li-progress>
  `;

  componentExample = {
    angular: `
      <li-progress [value]="65"></li-progress>
      <li-progress value="25" circular"></li-progress>
      <li-progress size="sm" circular intermediate></li-progress>
      <li-progress size="md" circular intermediate></li-progress>
      <li-progress size="lg" circular intermediate></li-progress>
    `,
    vue: `
      <li-progress :value="65"></li-progress>
      <li-progress value="25" circular"></li-progress>
      <li-progress size="sm" circular intermediate></li-progress>
      <li-progress size="md" circular intermediate></li-progress>
      <li-progress size="lg" circular intermediate></li-progress>
    `,
    javascript: `
      <li-progress value="65"></li-progress>
      <li-progress value="25" circular"></li-progress>
      <li-progress size="sm" circular intermediate></li-progress>
      <li-progress size="md" circular intermediate></li-progress>
      <li-progress size="lg" circular intermediate></li-progress>

      <script>
        const progress = document.querySelector('li-progress');
        progress.value = 75;
      </script>
    `
  };
}
