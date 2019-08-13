import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-message',
  templateUrl: './docs-message.component.html'
})
export class DocsMessageComponent implements OnInit {
  codeExampleImport = `
    import 'lithium-ui/message';
  `;

  codeExampleHtml = `
    <li-message closable="true">Default Message</li-message>
    <li-message type="success">Success Message</li-message>
    <li-message type="warning">Warning Message</li-message>
    <li-message type="error">Error Message</li-message>
  `;
  constructor() { }

  ngOnInit() {
  }

}
