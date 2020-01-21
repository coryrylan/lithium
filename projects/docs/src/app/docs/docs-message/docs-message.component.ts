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
    <li-message status="success">Success Message</li-message>
    <li-message status="warning">Warning Message</li-message>
    <li-message status="error">Error Message</li-message>
  `;
  constructor() {}

  ngOnInit() {}

  log(e: any) {
    console.log(e);
  }
}
