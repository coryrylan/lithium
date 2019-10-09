import { parse, format } from 'date-fns';
import { html, LitElement, property, query } from 'lit-element';
import { querySlotAll, registerElementSafely } from 'lithium-ui/common';
import { LithiumInputError, LithiumInputMessage } from 'lithium-ui/input';
import { LithiumDatepickerInline } from './datepicker-inline.element';
import { styles } from './datepicker.element.css';

let idCount = 0;
/**
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date
 */
export class LithiumDatepicker extends LitElement {
  @property({ type: Boolean, reflect: true }) inline = false;

  @querySlotAll('label') protected labels: NodeListOf<HTMLLabelElement>;
  @querySlotAll('li-input-message') protected messages: NodeListOf<LithiumInputMessage>;
  @querySlotAll('li-input-error') protected errorMessages: NodeListOf<LithiumInputError>;
  @querySlotAll('input') private inputs: NodeListOf<HTMLInputElement>;
  @query('input') private input: HTMLInputElement;
  @query('li-datepicker-inline') private inlineDatepicker: LithiumDatepickerInline;

  protected inputId = `li-datepicker-input-start-id-${idCount++}`;
  protected messageId = `li-datepicker-start-message-id-${idCount++}`;
  protected errorMessageId = `li-datepicker-start-error-id-${idCount++}`;

  @property() private showStartDatepicker = false;

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <slot></slot>
      <input type="text" readonly class="${this.inline ? 'li-display-none' : ''}" />
      <li-datepicker-inline
        class="${this.inline ? 'li-datepicker-inline' : 'li-datepicker-dropdown'}"
        dropdown="${!this.showStartDatepicker && !this.inline}"
        ?hidden="${!this.showStartDatepicker && !this.inline}"
        @valueChange=${(e: CustomEvent) => this.valueChange(e)}
      ></li-datepicker-inline>
    `;
  }

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.setupStartInput();
    this.setupEndInput();
    this.setupFormatValue();

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
    const dateFormat = format(date, 'MM/dd/yyyy');
    const dateValue = format(date, 'yyyy-MM-dd');

    this.input.value = dateFormat;
    this.updateStartInput(dateValue);
  }

  private updateStartInput(dateValue: string) {
    this.inputs[0].value = dateValue;
    this.inputs[0].dispatchEvent(new Event('input'));
    this.inputs[0].dispatchEvent(new Event('change'));
  }

  // private updateEndInput(dateValue: string) {
  //   this.inputs[0].value = dateValue;
  //   this.inputs[0].dispatchEvent(new Event('input'));
  //   this.inputs[0].dispatchEvent(new Event('change'));
  // }

  private setupStartInput() {
    this.setUpInput(0);
  }

  private setupEndInput() {
    this.setUpInput(1);
  }

  private setupFormatValue() {
    this.input.value = this.inputs[0].value;
    this.inlineDatepicker.value = parse(this.inputs[0].value, 'yyyy-MM-dd', new Date());
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
