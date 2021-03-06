import { LithiumDatepicker } from 'lithium-ui/datepicker';
import 'lithium-ui/datepicker';
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement, waitForComponent } from 'lithium-ui/test/utils';

describe('datepicker element', () => {
  let testElement: HTMLElement;
  let component: LithiumDatepicker;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-datepicker>
        <label>test label</label>
        <input type="date" />
        <li-input-message>test message</li-input-message>
        <li-input-error>test error</li-input-error>
      </li-datepicker>
    `;
    await waitForComponent('li-datepicker');
    component = testElement.querySelector<LithiumDatepicker>('li-datepicker');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render a input with appropriate slots', async () => {
    await componentIsStable(component);
    const slots = getComponentSlotContent(component);
    expect(slots.default.includes('test label')).toBe(true);
  });

  it('should associate the label with input', async () => {
    await componentIsStable(component);
    const label = testElement.querySelector('label');
    const input = testElement.querySelector('input');
    expect(label.getAttribute('for')).toBe(input.getAttribute('id'));
  });

  // it('should associate input with message and error components', async () => {
  //   await componentIsStable(component);
  //   const input = testElement.querySelector('input');
  //   const message = testElement.querySelector<LithiumMessage>('li-input-message');
  //   const error = testElement.querySelector<LithiumInputError>('li-input-error');
  //   expect(input.getAttribute('aria-describedby')).toBe(`${message.id} ${error.id}`);
  // });
});
