import { Component } from '@angular/core';

@Component({
  selector: 'app-docs-card',
  templateUrl: './docs-card.component.html'
})
export class DocsCardComponent {
  componentExample = {
    angular: `
    <li-card>
      <h2>Hello world from Angular!</h2>
    </li-card>
    `,
    vue: `
      <li-card>
        <h2>Hello world from Vue!</h2>
      </li-card>
    `,
    javascript: `
      <li-card>
        <h2>Hello world from HTML!</h2>
      </li-card>
    `
  };

  componentComplexExample = {
    angular: `
      <li-card>
        <li-card-header>
          <h2>Hello world from Angular!</h2>
        </li-card-header>
        <li-card-content>
          <p>Card Content</p>
        </li-card-content>
        <li-card-actions>
          <li-button level="tertiary">Cancel</li-button>
          <li-button>Action</li-button>
        </li-card-actions>
      </li-card>
    `,
    vue: `
      <li-card>
        <li-card-header>
          <h2>Hello world from Vue!</h2>
        </li-card-header>
        <li-card-content>
          <p>Card Content</p>
        </li-card-content>
        <li-card-actions>
          <li-button level="tertiary">Cancel</li-button>
          <li-button>Action</li-button>
        </li-card-actions>
      </li-card>
    `,
    javascript: `
      <li-card>
        <li-card-header>
          <h2>Hello world from HTML!</h2>
        </li-card-header>
        <li-card-content>
          <p>Card Content</p>
        </li-card-content>
        <li-card-actions>
          <li-button level="tertiary">Cancel</li-button>
          <li-button>Action</li-button>
        </li-card-actions>
      </li-card>
    `
  };
}
