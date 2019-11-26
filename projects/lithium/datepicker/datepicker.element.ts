import { format, parse } from 'date-fns';
import { html, LitElement, property, query } from 'lit-element';
import { KeyCodes, querySlotAll, registerElementSafely } from 'lithium-ui/common';
import { LithiumInputError, LithiumInputMessage } from 'lithium-ui/input';
import { LithiumDatepickerInline } from './datepicker-inline.element';
import { styles } from './datepicker.element.css';

let idCount = 0;

/**
 * Datepicker, input that adds additional functionality to the native HTML datepicker
 *
 * @noInheritDoc
 * @element li-datepicker
 * @slot default - Content slot for date inputs
 */
// @dynamic
export class LithiumDatepicker extends LitElement {
  /** display datepicker inline without a text input */
  @property({ type: Boolean, reflect: true }) inline = false;

  /** set the minimum date that can be selected */
  @property({ type: String }) min: string;

  /** set the maximum date that can be selected */
  @property({ type: String }) max: string;

  @querySlotAll('label') protected labels: NodeListOf<HTMLLabelElement>;
  @querySlotAll('li-input-message') protected messages: NodeListOf<LithiumInputMessage>;
  @querySlotAll('li-input-error') protected errorMessages: NodeListOf<LithiumInputError>;
  @querySlotAll('input') private inputs: NodeListOf<HTMLInputElement>;
  @query('li-datepicker-inline') private inlineDatepicker: LithiumDatepickerInline;

  protected inputId = `li-datepicker-input-start-id-${idCount++}`;
  protected messageId = `li-datepicker-start-message-id-${idCount++}`;
  protected errorMessageId = `li-datepicker-start-error-id-${idCount++}`;

  @property({ type: Boolean }) private showStartDatepicker = false;
  @property({ type: Boolean, reflect: true }) private range = false;
  @query('input') private input: HTMLInputElement;

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <slot></slot>
      <input type="text" readonly class="${this.inline ? 'li-display-none' : ''}" />
      <li-datepicker-inline
        class="${this.inline ? 'li-datepicker-inline' : 'li-datepicker-dropdown'}"
        ?dropdown="${!this.showStartDatepicker && !this.inline}"
        ?hidden="${!this.showStartDatepicker && !this.inline}"
        .range=${this.range}
        .minDate=${parse(this.min, 'yyyy-MM-dd', new Date())}
        .maxDate=${parse(this.max, 'yyyy-MM-dd', new Date())}
        @valueChange=${(e: CustomEvent) => this.valueChange(e)}
      ></li-datepicker-inline>
    `;
  }

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.setupStartInput();
    this.setupEndInput();
    this.setupInitialValue();

    this.labels[0].addEventListener('click', () => this.input.focus());
    this.input.addEventListener('focus', () => (this.showStartDatepicker = true));
    this.input.readOnly = true;

    document.addEventListener('click', (event: any) => {
      if (!this.shadowRoot.contains(event.target) && !this.contains(event.target)) {
        this.showStartDatepicker = false;
      }
    });

    window.addEventListener('keydown', this.closeOnEscape);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this.closeOnEscape);
  }

  private closeOnEscape = (event: KeyboardEvent) => {
    if ((event.key === KeyCodes.Escape || event.key === 'Esc') && this.showStartDatepicker === true) {
      this.showStartDatepicker = false;
      this.input.blur();
    }
    // tslint:disable-next-line: semicolon
  };

  private valueChange(e: CustomEvent) {
    if (Array.isArray(e.detail)) {
      if (e.detail[0] && e.detail[1]) {
        this.updateStartInput(format(e.detail[0], 'yyyy-MM-dd'));
        this.updateEndInput(format(e.detail[1], 'yyyy-MM-dd'));
        this.input.value = `${format(e.detail[0], 'MM/dd/yyyy')} - ${format(e.detail[1], 'MM/dd/yyyy')}`;
        this.showStartDatepicker = false;
      }
    } else if (!Array.isArray(e.detail) && e.detail) {
      this.updateStartInput(format(e.detail, 'yyyy-MM-dd'));
      this.input.value = format(e.detail, 'MM/dd/yyyy');
      this.showStartDatepicker = false;
    } else {
      this.updateStartInput('');
      this.updateEndInput('');
      this.showStartDatepicker = false;
    }
  }

  private updateStartInput(dateValue: string) {
    this.inputs[0].value = dateValue;
    this.inputs[0].dispatchEvent(new Event('input'));
    this.inputs[0].dispatchEvent(new Event('change'));
  }

  private updateEndInput(dateValue: string) {
    this.inputs[1].value = dateValue;
    this.inputs[1].dispatchEvent(new Event('input'));
    this.inputs[1].dispatchEvent(new Event('change'));
  }

  private setupStartInput() {
    this.setUpInput(0);
  }

  private setupEndInput() {
    this.setUpInput(1);
  }

  private setupInitialValue() {
    if (this.inputs.length && this.inputs[1]) {
      this.setupInitialRangeValue();
    } else {
      this.setupInitialSingleValue();
    }
  }

  private setupInitialRangeValue() {
    this.range = true;
    this.input.value = `${this.inputs[0].value} - ${this.inputs[1].value}`;

    this.inlineDatepicker.value = [
      parse(this.inputs[0].value, 'yyyy-MM-dd', new Date()),
      parse(this.inputs[1].value, 'yyyy-MM-dd', new Date())
    ];
  }

  private setupInitialSingleValue() {
    this.inputs[0].value = this.inputs[0].value;

    if (this.inputs[0].value && this.inputs[0].value.length) {
      this.inlineDatepicker.value = parse(this.inputs[0].value, 'yyyy-MM-dd', new Date());
    }
  }

  private setUpInput(index: number) {
    if (this.inputs[index]) {
      const indexId = `-${index}`;
      this.inputs[index].id = this.inputId + indexId;
      this.inputs[index].setAttribute('aria-describedby', `${this.messageId}${indexId} ${this.errorMessageId}${indexId}`);
      this.labels[index].setAttribute('for', this.inputId + indexId);

      if (this.messages[1]) {
        this.messages[1].id = this.messageId + indexId;
      }

      if (this.errorMessages[1]) {
        this.errorMessages[1].id = this.errorMessageId + indexId;
      }
    }
  }
}

registerElementSafely('li-datepicker-inline', LithiumDatepickerInline);
registerElementSafely('li-datepicker', LithiumDatepicker);

declare global {
  interface HTMLElementTagNameMap {
    'li-datepicker': LithiumDatepicker;
  }
}
