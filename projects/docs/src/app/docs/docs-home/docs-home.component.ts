import { Component } from '@angular/core';

@Component({
  selector: 'app-docs-home',
  templateUrl: './docs-home.component.html'
})
export class DocsHomeComponent {
  showDropdown = false;
  codeExample = `
    npm install lithium-ui
  `;
  codeExample2 = `
    import 'lithium-ui/modal';
  `;
  codeExample3 = `
    <li-modal>
      Hello World
    </li-modal>
  `;
}
