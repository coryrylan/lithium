import 'lithium-ui/input';
import { LithiumInput } from 'lithium-ui';
import { createTestElement, waitForComponent, removeTestElement, componentIsStable, getComponentSlotContent } from 'lithium-ui/test/utils';
import { LithiumMessage } from 'dist/lithium';
import { LithiumInputError } from './input-error.element';

describe('input element', () => {
  let testElement: HTMLElement;
  let component: LithiumInput;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-input>
        <label>test label</label>
        <input />
        <li-input-message>test message</li-input-message>
        <li-input-error>test error</li-input-error>
      </li-input>
    `;
    await waitForComponent('li-input');
    component = testElement.querySelector<LithiumInput>('li-input');
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

  it('should associate input with message and error components', async () => {
    await componentIsStable(component);
    const input = testElement.querySelector('input');
    const message = testElement.querySelector<LithiumMessage>('li-input-message');
    const error = testElement.querySelector<LithiumInputError>('li-input-error');
    expect(input.getAttribute('aria-describedby')).toBe(`${message.id} ${error.id}`);
  });
});
