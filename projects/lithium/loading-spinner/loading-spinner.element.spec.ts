import 'lithium-ui/loading-spinner';
import { LithiumLoadingSpinner } from 'lithium-ui/loading-spinner';
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement, waitForComponent } from 'lithium-ui/test/utils';

describe('loading spinner element', () => {
  let testElement: HTMLElement;
  let component: LithiumLoadingSpinner;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `<li-loading-spinner></li-loading-spinner>`;
    await waitForComponent('li-loading-spinner');
    component = testElement.querySelector<LithiumLoadingSpinner>('li-loading-spinner');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render loading svg', async () => {
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain('svg');
  });

  it('should set appropriate aria live attribute', async () => {
    await componentIsStable(component);
    expect(component.getAttribute('aria-live')).toBe('polite');
  });
});
