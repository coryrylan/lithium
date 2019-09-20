import 'lithium-ui/tabs';
import { LithiumTab } from 'lithium-ui/tabs';
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement, waitForComponent } from 'lithium-ui/test/utils';

describe('card element', () => {
  let testElement: HTMLElement;
  let component: LithiumTab;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-tab>
        <span>hello world</span>
      </li-tab>
    `;
    await waitForComponent('li-tab');
    component = testElement.querySelector<LithiumTab>('li-tab');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render tab content with appropriate slots', async () => {
    await componentIsStable(component);
    const slots = getComponentSlotContent(component);
    expect(slots.default).toBe('<span>hello world</span>');
  });
});
