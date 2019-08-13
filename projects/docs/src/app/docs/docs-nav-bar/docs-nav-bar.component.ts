import { Component } from '@angular/core';

@Component({
  selector: 'app-docs-nav-bar',
  templateUrl: './docs-nav-bar.component.html'
})
export class DocsNavBarComponent {
  codeExampleImport = `
    import 'lithium-ui/nav-bar';
  `;

  codeExampleHtml = `
    <li-nav-bar>
      <a href="#">Lithium</a>
      <a href="#" li-nav-bar-right>Docs</a>
      <a href="#">About</a>
      <a href="#">Support</a>
    </li-nav-bar>
  `;
}
