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
      <li-tab name="Tab Button 1">
        <h2>Tab 1</h2>
      </li-tab>
      <li-tab name="Tab Button 2">
        <h2>Tab 2</h2>
      </li-tab>
      <li-tab name="Tab Button 3">
        <h2>Tab 3</h2>
      </li-tab>
    </li-tabs>
  `;
}
