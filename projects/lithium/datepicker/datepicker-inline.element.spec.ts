import { addMonths, format } from 'date-fns';
import 'lithium-ui/datepicker';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from 'lithium-ui/test/utils';
import { LithiumDatepickerInline } from './datepicker-inline.element';

describe('li-datepicker-inline element', () => {
  let testElement: HTMLElement;
  let component: LithiumDatepickerInline;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-datepicker-inline></li-datepicker-inline>
    `;
    await waitForComponent('li-datepicker-inline');
    component = testElement.querySelector<LithiumDatepickerInline>('li-datepicker-inline');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render a datepicker', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should highlight todays date', async () => {
    await componentIsStable(component);
    const today = new Date().getDate().toString();
    expect(component.shadowRoot.querySelector('.li-datepicker__today').textContent.trim()).toBe(today);
  });

  it('should highlight the selected date', async () => {
    await componentIsStable(component);
    const day = new Date();
    component.value = day;
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('.li-datepicker__selected-date').textContent.trim()).toBe(day.getDate().toString());
  });

  it('should render the current month and year', async () => {
    await componentIsStable(component);
    const day = new Date();
    const title = `${format(day, 'MMMM')} ${format(day, 'yyyy')}`;
    expect(component.shadowRoot.querySelector('.li-datepicker__title').textContent.trim()).toBe(title);
  });

  it('should render next and previous months', async () => {
    // current month
    await componentIsStable(component);
    const day = new Date();
    const title = `${format(day, 'MMMM')} ${format(day, 'yyyy')}`;
    expect(component.shadowRoot.querySelector('.li-datepicker__title').textContent.trim()).toBe(title);

    // next month
    component.shadowRoot.querySelector<HTMLButtonElement>('.li-datepicker__next').click();
    await componentIsStable(component);
    const next = `${format(addMonths(day, 1), 'MMMM')} ${format(addMonths(day, 1), 'yyyy')}`;
    expect(component.shadowRoot.querySelector('.li-datepicker__title').textContent.trim()).toBe(next);

    // current month
    component.shadowRoot.querySelector<HTMLButtonElement>('.li-datepicker__prev').click();
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('.li-datepicker__title').textContent.trim()).toBe(title);
  });
});
