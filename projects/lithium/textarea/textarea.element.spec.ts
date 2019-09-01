import 'lithium-ui/textarea';
import { LithiumTextArea } from 'lithium-ui/textarea';
import { createTestElement, waitForComponent, removeTestElement, componentIsStable, getComponentSlotContent } from 'lithium-ui/test/utils';

describe('textarea element', () => {
  let testElement: HTMLElement;
  let component: LithiumTextArea;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-textarea>
        <label>textarea label</label>
        <textarea></textarea>
      </li-textarea>
    `;
    await waitForComponent('li-textarea');
    component = testElement.querySelector<LithiumTextArea>('li-textarea');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render a textarea with appropriate slots', async () => {
    await componentIsStable(component);
    const slots = getComponentSlotContent(component);
    expect(slots.default.includes('textarea label')).toBe(true);
  });
});
