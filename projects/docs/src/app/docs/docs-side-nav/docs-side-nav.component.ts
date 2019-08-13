import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-side-nav',
  templateUrl: './docs-side-nav.component.html'
})
export class DocsSideNavComponent implements OnInit {
  open = false;

  codeExampleImport = `
    import 'lithium-ui/side-nav';
  `;

  codeExampleHtml = `
    <li-side-nav>
      <a href="#">Getting Started</a>
      <a href="#">Modal</a>
    </li-side-nav>
  `;

  constructor() { }

  ngOnInit() {
  }

}
