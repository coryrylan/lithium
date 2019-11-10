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
    <!-- Simple Layout -->
    <li-modal>
      Hello World
    </li-modal>

    <!-- Complex Layout -->
    <li-modal>
      <li-modal-header>
        <h1>Hello World Header</h1>
      </li-modal-header>
      <li-modal-content>
        <p>Hello World</p>
      </li-modal-content>
      <li-modal-actions>
        Hello World Actions
      </li-modal-actions>
    </li-modal>
  `;

  constructor() {}

  ngOnInit() {}
}
