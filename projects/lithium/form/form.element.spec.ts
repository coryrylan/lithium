import 'lithium-ui/form';
import { LithiumForm } from 'lithium-ui/form';
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement, waitForComponent } from 'lithium-ui/test/utils';

describe('form element', () => {
  let testElement: HTMLElement;
  let component: LithiumForm;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-form>
        <span>hello world</span>
      </li-form>
    `;
    await waitForComponent('li-form');
    component = testElement.querySelector<LithiumForm>('li-form');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render a form with appropriate slots', async () => {
    await componentIsStable(component);
    const slots = getComponentSlotContent(component);
    expect(slots.default).toBe('<span>hello world</span>');
  });
});
