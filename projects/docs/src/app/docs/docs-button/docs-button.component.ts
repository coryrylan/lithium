import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-docs-button',
  templateUrl: './docs-button.component.html'
})
export class DocsButtonComponent {
  codeExampleTypes = `
    <li-button>click</li-button>
    <li-button type="submit">submit</li-button>
    <li-button disabled>disabled</li-button>

    <li-button>
      <a href="/about">link</a>
    </li-button>
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
        --li-button-background-color: var(--global-color-purple-100);
        --li-button-color: var(--global-color-white-100);
      }
    </style>
  `;


  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: [],
      email: ['', [Validators.required, Validators.email]],
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
}
