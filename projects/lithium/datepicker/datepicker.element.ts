import { html, LitElement, property, query } from 'lit-element';
import { querySlotAll, registerElementSafely } from 'lithium-ui/common';
import { LithiumInputError, LithiumInputMessage } from 'lithium-ui/input';
import { LithiumDatepickerInline } from './datepicker-inline.element';
import { styles } from './datepicker.element.css';

let idCount = 0;

export class LithiumDatepicker extends LitElement {
  @property({ type: Boolean, reflect: true }) error = false;
  @property({ type: Boolean, reflect: true }) inline = false;
  @property({ type: Boolean }) nativeOnly = false;
  @property({ type: Boolean }) nativeMobileOnly = true;

  @querySlotAll('label') protected labels: NodeListOf<HTMLLabelElement>;
  @querySlotAll('li-input-message') protected messages: NodeListOf<LithiumInputMessage>;
  @querySlotAll('li-input-error') protected errorMessages: NodeListOf<LithiumInputError>;
  @querySlotAll('input') private inputs: NodeListOf<HTMLInputElement>;
  @query('input') private input: HTMLInputElement;

  protected inputStartId = `li-datepicker-input-start-id-${idCount++}`;
  protected inputEndId = `li-datepicker-input-end-id-${idCount++}`;
  protected messageStartId = `li-datepicker-start-message-id-${idCount++}`;
  protected messageEndId = `li-datepicker-end-message-id-${idCount++}`;
  protected errorMessageStartId = `li-datepicker-start-error-id-${idCount++}`;
  protected errorMessageEndId = `li-datepicker-end-error-id-${idCount++}`;

  @property() private showStartDatepicker = false;

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <slot></slot>
      <input type="text" readonly />
      <li-datepicker-inline
        ?hidden="${!this.showStartDatepicker}"
        @valueChange=${(e: CustomEvent) => this.valueChange(e)}
      ></li-datepicker-inline>
    `;
  }

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.setupStartInput();
    this.setupEndInput();

    this.input.addEventListener('focus', () => (this.showStartDatepicker = true));

    document.addEventListener('click', (event: any) => {
      if (!this.shadowRoot.contains(event.target) && !this.contains(event.target)) {
        this.showStartDatepicker = false;
      }
    });
  }

  private valueChange(e: CustomEvent) {
    this.showStartDatepicker = false;

    const date: Date = e.detail;
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const dateString = `${date.getFullYear()}-${month}-${day}`;
    this.input.value = dateString;
    this.inputs[0].value = dateString;
    this.inputs[0].dispatchEvent(new Event('input'));
    this.inputs[0].dispatchEvent(new Event('change'));
  }

  private setupStartInput() {
    console.log(this.input);
    this.input.id = this.inputStartId;
    this.input.setAttribute('aria-describedby', `${this.messageStartId} ${this.errorMessageStartId}`);
    this.labels[0].setAttribute('for', this.inputStartId);

    if (this.messages[0]) {
      this.messages[0].id = this.messageStartId;
    }

    if (this.errorMessages[0]) {
      this.errorMessages[0].id = this.errorMessageStartId;
    }
  }

  private setupEndInput() {
    if (this.inputs[1]) {
      this.inputs[1].id = this.inputEndId;
      this.inputs[1].setAttribute('aria-describedby', `${this.messageStartId} ${this.errorMessageEndId}`);
      this.labels[1].setAttribute('for', this.inputEndId);

      if (this.messages[1]) {
        this.messages[1].id = this.messageEndId;
      }

      if (this.errorMessages[1]) {
        this.errorMessages[1].id = this.errorMessageEndId;
      }
    }
  }
}

registerElementSafely('li-datepicker-inline', LithiumDatepickerInline);
registerElementSafely('li-datepicker', LithiumDatepicker);
