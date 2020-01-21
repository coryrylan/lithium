import { addMonths, format, getDayOfYear, isAfter, isBefore, isToday, setDate, subMonths } from 'date-fns';
import { html, LitElement } from 'lit-element';

import {
  daysInMonth,
  getDayOfWeekOffset,
  isBetweenDateRange,
  isEndOfDateRange,
  isSameDate,
  isStartOfDateRange,
  monthNames,
  removeTimeIfAvailable,
  weekDays
} from './util';

import { event, EventEmitter, IntlService, property, registerElementSafely } from 'lithium-ui/common';
import { styles } from './datepicker-inline.element.css';

export class LithiumDatepickerInline extends LitElement {
  @event() private valueChange: EventEmitter<Date | [Date, Date]>;

  @property({ type: Boolean }) range = false;
  @property({ type: Date }) minDate: Date;
  @property({ type: Date }) maxDate: Date;
  // TODO: aria/label date format as prop

  // had to mark private props with the decorator for lit change detection
  // ideally this could be refactored into a single `state` property and be immutable
  @property() private weekDays = weekDays;
  @property() private calendarDate: Date;
  @property() private monthName: string;
  @property() private year: number;
  @property() private daysInMonth: Date[];
  @property() private dayOfWeekOffset: number[];

  private _value: Date | [Date, Date] = null;
  private selectedRangeIndex = 0;

  @property()
  get value() {
    return this._value;
  }

  set value(val: Date | [Date, Date]) {
    if (val && this._value !== val) {
      if ((val as Date[]).length) {
        const dates = val as [Date, Date];
        val = [removeTimeIfAvailable(dates[0]), removeTimeIfAvailable(dates[1])];
        this.setCalendarDate(val[0]);
      } else {
        val = removeTimeIfAvailable(val as Date);
        this.setCalendarDate(val);
      }
    }

    if (this._value !== val) {
      this._value = val;
      this.requestUpdate();
      this.valueChange.emit(this._value);
    }
  }

  constructor() {
    super();
    this.setCalendarDate(new Date());
  }

  render() {
    return html`
      <style>
        ${styles}
      </style>
      <div class="li-datepicker">
        <div class="li-datepicker__top-nav">
          <button
            type="button"
            @click="${() => this.prev()}"
            aria-label="${IntlService.registry.previousMonth}"
            class="li-datepicker__prev li-datepicker__btn"
          >
            ◀
          </button>
          <div class="li-datepicker__title">${this.monthName} ${this.year}</div>
          <button
            type="button"
            @click="${() => this.next()}"
            aria-label="${IntlService.registry.nextMonth}"
            class="li-datepicker__next li-datepicker__btn"
          >
            ▶
          </button>
        </div>

        <div class="li-datepicker__weekdays">
          ${this.weekDays.map(
            d => html`
              <div class="li-datepicker__weekday">
                ${d}
              </div>
            `
          )}
        </div>

        <div class="li-datepicker__days">
          ${this.dayOfWeekOffset.map(
            () =>
              html`
                <div></div>
              `
          )}
          ${this.daysInMonth.map(
            d => html`
              <button
                type="button"
                title="${format(d, 'dd/MM/yyyy')}"
                label="${format(d, 'dd/MM/yyyy')}"
                aria-selected="${this.getIsSelected(d)}"
                .disabled="${this.getIsDisabled(d)}"
                @click="${() => this.setDay(d)}"
                class="${this.getDayClass(d)}"
              >
                ${d.getDate()}
              </button>
            `
          )}
        </div>
      </div>
    `;
  }

  private setCalendarDate(date: Date) {
    this.calendarDate = date;
    this.monthName = monthNames[this.calendarDate.getMonth()];
    this.year = this.calendarDate.getFullYear();
    this.daysInMonth = daysInMonth(this.calendarDate);
    this.dayOfWeekOffset = getDayOfWeekOffset(this.calendarDate);
  }

  private setDay(dayOfMonth: Date) {
    if (this.range) {
      this.setRange(dayOfMonth);
    } else {
      this.setSingleDay(dayOfMonth);
    }
  }

  private setSingleDay(dayOfMonth: Date) {
    const value = this.value as Date;
    const dayIsSameDayOfYear = getDayOfYear(value) === getDayOfYear(setDate(this.calendarDate, dayOfMonth.getDate()));
    this.value = !dayIsSameDayOfYear ? setDate(this.calendarDate, dayOfMonth.getDate()) : undefined;
  }

  private setRange(dayOfMonth: Date) {
    let dates = this.value as [Date, Date];
    const day = dayOfMonth.getDate();
    const dayIsSameDayOfYear = getDayOfYear(dates[this.selectedRangeIndex]) === getDayOfYear(setDate(this.calendarDate, day));

    if (this.selectedRangeIndex === 0) {
      dates[0] = !dayIsSameDayOfYear ? setDate(this.calendarDate, day) : undefined;
      dates[1] = undefined;
    } else {
      dates[1] = setDate(this.calendarDate, day);
    }

    dates = isAfter(dates[0], dates[1]) ? [dates[1], dates[0]] : dates;
    this.selectedRangeIndex = this.selectedRangeIndex === 0 ? 1 : 0;
    this.value = [dates[0], dates[1]];
  }

  private getDayClass(day: Date) {
    const cssClasses = ['li-datepicker__day li-datepicker__btn '];

    if (isToday(day)) {
      cssClasses.push('li-datepicker__today ');
    }

    if (!this.range && isSameDate(day, this.value as Date)) {
      cssClasses.push('li-datepicker__selected-date ');
    }

    if (this.range) {
      const dateRange = this.value as [Date, Date];

      if (isStartOfDateRange(day, dateRange)) {
        cssClasses.push('li-datepicker__start-date ');
      }

      if (isEndOfDateRange(day, dateRange)) {
        cssClasses.push('li-datepicker__end-date ');
      }

      if (isBetweenDateRange(day, dateRange)) {
        cssClasses.push('li-datepicker__in-range-date ');
      }
    }

    return cssClasses.reduce((p, n) => p + ` ${n}`, '');
  }

  private getIsSelected(day: Date) {
    if (!this.range && isSameDate(day, this.value as Date)) {
      return true;
    }

    if (this.range) {
      const dateRange = this.value as [Date, Date];

      if (isStartOfDateRange(day, dateRange) || isEndOfDateRange(day, dateRange)) {
        return true;
      }
    }

    return false;
  }

  private getIsDisabled(day: Date) {
    if (this.minDate && isBefore(day, this.minDate)) {
      return true;
    }

    if (this.maxDate && isAfter(day, this.maxDate)) {
      return true;
    }

    return false;
  }

  private prev() {
    this.setCalendarDate(subMonths(this.calendarDate, 1));
  }

  private next() {
    this.setCalendarDate(addMonths(this.calendarDate, 1));
  }
}

registerElementSafely('li-datepicker-inline', LithiumDatepickerInline);
