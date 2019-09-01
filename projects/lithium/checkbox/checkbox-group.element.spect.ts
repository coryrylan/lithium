import 'lithium-ui/card';
import { LithiumCheckboxGroup } from 'lithium-ui/checkbox';
import { createTestElement, waitForComponent, removeTestElement, componentIsStable, getComponentSlotContent } from 'lithium-ui/test/utils';

describe('checkbox group element', () => {
  let testElement: HTMLElement;
  let component: LithiumCheckboxGroup;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-checkbox-group>
        <span>hello world</span>
      </li-checkbox-group>
    `;
    await waitForComponent('li-checkbox-group');
    component = testElement.querySelector<LithiumCheckboxGroup>('li-checkbox-group');
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
