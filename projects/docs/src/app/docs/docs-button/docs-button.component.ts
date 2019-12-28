import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-docs-button',
  templateUrl: './docs-button.component.html'
})
export class DocsButtonComponent {
  componentEvents = {
    angular: `
      <li-button (click)="log($event)">angular</li-button>
    `,
    vue: `
      <li-button @click="log">vue</li-button>
    `,
    javascript: `
      <li-button>javascript</li-button>
      <script>
        document
          .querySelector('li-button')
          .addEventListener('click', event => console.log(event));
      </script>
    `
  };

  componentExampleTypes = {
    angular: `
      <li-button type="submit">angular</li-button>
      <li-button disabled>disabled</li-button>
      <li-button><a routerLink="/about">link</a></li-button>
      <li-button loading="true">loading</li-button>
    `,
    vue: `
      <li-button type="submit">vue</li-button>
      <li-button disabled>disabled</li-button>
      <li-button><a href="/about">link</a></li-button>
      <li-button loading="true">loading</li-button>
    `,
    javascript: `
      <li-button type="submit">javascript</li-button>
      <li-button disabled>disabled</li-button>
      <li-button><a href="/about">link</a></li-button>
      <li-button loading="true">loading</li-button>
    `
  };

  componentExampleColors = {
    angular: `
      <li-button>default</li-button>
      <li-button status="success">success</li-button>
      <li-button status="warning">warning</li-button>
      <li-button status="danger">danger</li-button>
      <li-button class="purple">custom color</li-button>

      <style>
        li-button.purple {
          --background: #7c0799;
          --color: #fff;
        }
      </style>
    `,
    vue: `
      <li-button>default</li-button>
      <li-button status="success">success</li-button>
      <li-button status="warning">warning</li-button>
      <li-button status="danger">danger</li-button>
      <li-button class="purple">custom color</li-button>

      <style>
        li-button.purple {
          --background: #7c0799;
          --color: #fff;
        }
      </style>
    `,
    javascript: `
      <li-button>default</li-button>
      <li-button status="success">success</li-button>
      <li-button status="warning">warning</li-button>
      <li-button status="danger">danger</li-button>
      <li-button class="purple">custom color</li-button>

      <style>
        li-button.purple {
          --background: #7c0799;
          --color: #fff;
        }
      </style>
    `
  };

  componentExampleStyles = {
    angular: `
      <li-button>primary</li-button>
      <li-button action="secondary">secondary</li-button>
      <li-button action="tertiary">tertiary</li-button>
      <li-button action="tertiary-inline"><a href="/about">tertiary inline</a></li-button>
    `,
    vue: `
      <li-button>primary</li-button>
      <li-button action="secondary">secondary</li-button>
      <li-button action="tertiary">tertiary</li-button>
      <li-button action="tertiary-inline"><a href="/about">tertiary inline</a></li-button>
    `,
    javascript: `
      <li-button>primary</li-button>
      <li-button action="secondary">secondary</li-button>
      <li-button action="tertiary">tertiary</li-button>
      <li-button action="tertiary-inline"><a href="/about">tertiary inline</a></li-button>
    `
  };

  componentExampleSize = {
    angular: `
      <li-button size="sm">small</li-button>
      <li-button>default</li-button>
      <li-button size="lg">large</li-button>
    `,
    vue: `
      <li-button size="sm">small</li-button>
      <li-button>default</li-button>
      <li-button size="lg">large</li-button>
    `,
    javascript: `
      <li-button size="sm">small</li-button>
      <li-button>default</li-button>
      <li-button size="lg">large</li-button>
    `
  };

  componentExampleLoading = {
    angular: `
      <li-button [loading]="loadingBoolean">
        click for loading
      </li-button>
    `,
    vue: `
      <li-button :loading="loadingBoolean">
        click for loading
      </li-button>
    `,
    javascript: `
      <li-button>
        click for loading
      </li-button>
      <script>
        document.querySelector('li-button').loading = true;
      </script>
    `
  };

  componentExampleIcon = {
    angular: `
      <li-button size="icon" aria-label="CPU Usage High">
        <li-icon name="warning"></li-icon>
      </li-button>
      <li-button action="tertiary" aria-label="Info">
        <li-icon name="info"></li-icon>
      </li-button>
    `,
    vue: `
      <li-button size="icon" aria-label="CPU Usage High">
        <li-icon name="warning"></li-icon>
      </li-button>
      <li-button action="tertiary" aria-label="Info">
        <li-icon name="info"></li-icon>
      </li-button>
    `,
    javascript: `
      <li-button size="icon" aria-label="CPU Usage High">
        <li-icon name="warning"></li-icon>
      </li-button>
      <li-button action="tertiary" aria-label="Info">
        <li-icon name="info"></li-icon>
      </li-button>
    `
  };

  componentExampleGroup = {
    angular: `
      <li-button-group>
        <li-button>Item 1</li-button>
        <li-button>Item 2</li-button>
        <li-button>Item 3</li-button>
      </li-button-group>

      <li-button-group>
        <li-button action="secondary">Item 1</li-button>
        <li-button action="secondary">Item 2</li-button>
        <li-button action="secondary">Item 3</li-button>
      </li-button-group>
    `,
    vue: `
      <li-button-group>
        <li-button>Item 1</li-button>
        <li-button>Item 2</li-button>
        <li-button>Item 3</li-button>
      </li-button-group>

      <li-button-group>
        <li-button action="secondary">Item 1</li-button>
        <li-button action="secondary">Item 2</li-button>
        <li-button action="secondary">Item 3</li-button>
      </li-button-group>
    `,
    javascript: `
      <li-button-group>
        <li-button>Item 1</li-button>
        <li-button>Item 2</li-button>
        <li-button>Item 3</li-button>
      </li-button-group>

      <li-button-group>
        <li-button action="secondary">Item 1</li-button>
        <li-button action="secondary">Item 2</li-button>
        <li-button action="secondary">Item 3</li-button>
      </li-button-group>
    `
  };

  form: FormGroup;
  showLoading = false;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: [],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get email() {
    return this.form.controls.email;
  }

  submit() {
    console.log(this.form.value);
  }

  log() {
    console.log('click');
  }

  toggleLoading() {
    this.showLoading = true;

    setTimeout(() => {
      this.showLoading = false;
    }, 2000);
  }
}
