import 'lithium-ui/select';
import { LithiumSelect } from 'lithium-ui/select';
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement, waitForComponent } from 'lithium-ui/test/utils';

describe('textarea element', () => {
  let testElement: HTMLElement;
  let component: LithiumSelect;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-select>
        <label>Select an Option</label>
        <select>
          <option>Option One</option>
          <option>Option Two</option>
          <option>Option Three</option>
        </select>
      </li-select>
    `;
    await waitForComponent('li-select');
    component = testElement.querySelector<LithiumSelect>('li-select');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render a select with appropriate slots', async () => {
    await componentIsStable(component);
    const slots = getComponentSlotContent(component);
    expect(slots.default.includes('Select an Option')).toBe(true);
  });
});
