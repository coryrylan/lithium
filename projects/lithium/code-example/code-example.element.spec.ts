import 'lithium-ui/code-example';
import { LithiumCodeExample } from 'lithium-ui/code-example';
import { createTestElement, waitForComponent, removeTestElement, componentIsStable, getComponentSlotContent } from 'lithium-ui/test/utils';

describe('code example element', () => {
  let testElement: HTMLElement;
  let component: LithiumCodeExample;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-code-example></li-code-example>
    `;
    await waitForComponent('li-code-example');
    component = testElement.querySelector<LithiumCodeExample>('li-code-example');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should add appropriate classes for language', async () => {
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML.includes('language-javascript')).toBe(true);
    expect(component).toBeTruthy();
  });
});
