import 'lithium-ui/radio';
import { LithiumRadioGroup } from 'lithium-ui/radio';
import { createTestElement, waitForComponent, removeTestElement, componentIsStable, getComponentSlotContent } from 'lithium-ui/test/utils';

describe('radio group element', () => {
  let testElement: HTMLElement;
  let component: LithiumRadioGroup;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-radio-group>
        <span>hello world</span>
      </li-radio-group>
    `;
    await waitForComponent('li-radio-group');
    component = testElement.querySelector<LithiumRadioGroup>('li-radio-group');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render with appropriate slots', async () => {
    await componentIsStable(component);
    const slots = getComponentSlotContent(component);
    expect(slots.default).toBe('<span>hello world</span>');
  });
});
