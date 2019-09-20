import 'lithium-ui/nav-bar';
import { LithiumNavBar } from 'lithium-ui/nav-bar';
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement, waitForComponent } from 'lithium-ui/test/utils';

describe('card element', () => {
  let testElement: HTMLElement;
  let component: LithiumNavBar;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-nav-bar>
        <a href="#">link</a>
      </li-nav-bar>
    `;
    await waitForComponent('li-nav-bar');
    component = testElement.querySelector<LithiumNavBar>('li-nav-bar');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render a nav bar with appropriate slots', async () => {
    await componentIsStable(component);
    const slots = getComponentSlotContent(component);
    expect(slots.default).toBe('<a href="#">link</a>');
  });
});
