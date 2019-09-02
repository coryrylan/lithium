import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-docs-modal',
  templateUrl: './docs-modal.component.html'
})
export class DocsModalComponent implements OnInit {
  openModal = false;
  formsModal = false;
  largeModal = false;
  input = new FormControl('Hello World Content');

  codeExampleImport = `
    import 'lithium-ui/modal';
  `;

  codeExampleHtml = `
    <li-modal>
      <h1 slot="header">Hello World Header</h1>
      <p>Hello World</p>
      <div slot="footer">Hello World Footer</div>
    </li-modal>
  `;

  constructor() {}

  ngOnInit() {}
}
