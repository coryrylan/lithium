import 'lithium-ui/progress-bar';
import { LithiumProgressBar } from 'lithium-ui/progress-bar';
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement, waitForComponent } from 'lithium-ui/test/utils';

describe('card element', () => {
  let testElement: HTMLElement;
  let component: LithiumProgressBar;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-progress-bar></li-progress-bar>
    `;
    await waitForComponent('li-progress-bar');
    component = testElement.querySelector<LithiumProgressBar>('li-progress-bar');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render a progress bar', async () => {
    component.value = 50;
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML.includes('li-progress-bar-value')).toBe(true);
    expect(component.shadowRoot.innerHTML.includes('50%')).toBe(true);

    component.showValue = false;
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML.includes('li-progress-bar-value')).toBe(false);
  });
});
