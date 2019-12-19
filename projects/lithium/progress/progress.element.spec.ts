import 'lithium-ui/progress';
import { LithiumProgress } from 'lithium-ui/progress';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from 'lithium-ui/test/utils';

describe('card element', () => {
  let testElement: HTMLElement;
  let component: LithiumProgress;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-progress></li-progress>
    `;
    await waitForComponent('li-progress');
    component = testElement.querySelector<LithiumProgress>('li-progress');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render a progress', async () => {
    component.value = 50;
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML.includes('li-progress-bar-value')).toBe(true);
    expect(component.shadowRoot.innerHTML.includes('50%')).toBe(true);

    component.showValue = false;
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML.includes('li-progress-bar-value')).toBe(false);
  });
});
