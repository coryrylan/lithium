import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-tabs',
  templateUrl: './docs-tabs.component.html'
})
export class DocsTabsComponent {
  codeExampleImport = `
    import 'lithium-ui/tabs';
  `;

  codeExampleTypes = `
    <li-tabs>
      <li-tab-title>Tab 1</li-tab-title>
      <li-tab-title>Tab 2</li-tab-title>
      <li-tab-title>Tab 3</li-tab-title>
      <li-tab>
        <h2>Tab 1</h2>
      </li-tab>
      <li-tab>
        <h2>Tab 2</h2>
      </li-tab>
      <li-tab>
        <h2>Tab 3</h2>
      </li-tab>
    </li-tabs>
  `;
}
