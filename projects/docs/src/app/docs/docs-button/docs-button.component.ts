import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-docs-button',
  templateUrl: './docs-button.component.html'
})
export class DocsButtonComponent {
  codeExampleImport = `
    import 'lithium-ui/button';
  `;

  codeExampleTypes = `
    <li-button type="submit">submit</li-button>
    <li-button disabled>disabled</li-button>
    <li-button><a href="/about">link</a></li-button>
    <li-button loading="true">loading</li-button>
  `;

  codeExampleStyles = `
    <li-button>primary</li-button>
    <li-button level="secondary">secondary</li-button>
    <li-button level="tertiary">tertiary</li-button>
    <li-button level="tertiary-inline"><a href="/about">tertiary inline</a></li-button>
  `;

  codeExampleColors = `
    <li-button>default</li-button>
    <li-button action="success">success</li-button>
    <li-button action="warning">warning</li-button>
    <li-button action="danger">danger</li-button>
    <li-button class="purple">custom color</li-button>

    <style>
      li-button.purple {
        --li-button-background-color: #7c0799;
        --li-button-color: #fff;
      }
    </style>
  `;

  codeExampleSize = `
    <li-button size="small">small</li-button>
    <li-button>default</li-button>
    <li-button size="large">large</li-button>
  `;

  codeExampleLoading = `
    <li-button loading="true">
      click for loading
    </li-button>
  `;

  codeExampleIcon = `
    <li-button size="icon" aria-label="CPU Usage High">
      <li-icon name="warning"></li-icon>
    </li-button>
    <li-button size="tertiary" aria-label="Info">
      <li-icon name="info"></li-icon>
    </li-button>
  `;

  codeExampleGroup = `
    <li-button-group>
      <li-button>Item 1</li-button>
      <li-button>Item 2</li-button>
      <li-button>Item 3</li-button>
    </li-button-group>

    <li-button-group>
      <li-button level="secondary">Item 1</li-button>
      <li-button level="secondary">Item 2</li-button>
      <li-button level="secondary">Item 3</li-button>
    </li-button-group>
  `;

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
