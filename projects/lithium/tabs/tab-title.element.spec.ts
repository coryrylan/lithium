import 'lithium-ui/tabs';
import { LithiumTabTitle } from 'lithium-ui/tabs';
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement, waitForComponent } from 'lithium-ui/test/utils';

describe('card element', () => {
  let testElement: HTMLElement;
  let component: LithiumTabTitle;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-tab-title>
        <span>hello world</span>
      </li-tab-title>
    `;
    await waitForComponent('li-tab-title');
    component = testElement.querySelector<LithiumTabTitle>('li-tab-title');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render a title with appropriate slots', async () => {
    await componentIsStable(component);
    const slots = getComponentSlotContent(component);
    expect(slots.default).toBe('<span>hello world</span>');
  });
});
