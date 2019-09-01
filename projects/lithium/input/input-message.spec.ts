import 'lithium-ui/input';
import { LithiumInputMessage } from 'lithium-ui/input';
import { createTestElement, waitForComponent, removeTestElement, componentIsStable, getComponentSlotContent } from 'lithium-ui/test/utils';

describe('input message element', () => {
  let testElement: HTMLElement;
  let component: LithiumInputMessage;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-input-message>
        <span>test message</span>
      </li-input-message>
    `;
    await waitForComponent('li-input-message');
    component = testElement.querySelector<LithiumInputMessage>('li-input-message');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render the message with appropriate slots', async () => {
    await componentIsStable(component);
    const slots = getComponentSlotContent(component);
    expect(slots.default.includes('test message')).toBe(true);
  });
});
