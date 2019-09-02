import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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
    <li-button loading>loading...</li-button>
  `;

  codeExampleStyles = `
    <li-button>default</li-button>
    <li-button outline>outline</li-button>
    <li-button flat>flat</li-button>
  `;

  codeExampleColors = `
    <li-button>default</li-button>
    <li-button success>success</li-button>
    <li-button warning>warning</li-button>
    <li-button danger>danger</li-button>
    <li-button class="purple">custom color</li-button>

    <style>
      li-button.purple {
        --li-button-background-color: #7c0799;
        --li-button-color: #fff;
      }
    </style>
  `;

  codeExampleSize = `
    <li-button small>small</li-button>
    <li-button>default</li-button>
    <li-button large>large</li-button>
  `;

  codeExampleLoading = `
    <li-button loading>
      click for loading
    </li-button>
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
