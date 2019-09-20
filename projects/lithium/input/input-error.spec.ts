import 'lithium-ui/input';
import { LithiumInputError } from 'lithium-ui/input';
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement, waitForComponent } from 'lithium-ui/test/utils';

describe('input error element', () => {
  let testElement: HTMLElement;
  let component: LithiumInputError;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-input-error>
        <span>test error</span>
      </li-input-error>
    `;
    await waitForComponent('li-input-error');
    component = testElement.querySelector<LithiumInputError>('li-input-error');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render the message with appropriate slots', async () => {
    await componentIsStable(component);
    const slots = getComponentSlotContent(component);
    expect(slots.default.includes('test error')).toBe(true);
  });

  it('should apply the appropriate aria live attribute', async () => {
    await componentIsStable(component);
    expect(component.getAttribute('aria-live')).toBe('polite');
  });
});
