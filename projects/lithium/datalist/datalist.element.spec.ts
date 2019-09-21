import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement, waitForComponent } from 'lithium-ui/test/utils';
import 'lithium-ui/datalist';
import { LithiumDatalist } from 'lithium-ui/datalist';

describe('textarea element', () => {
  let testElement: HTMLElement;
  let component: LithiumDatalist;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-datalist>
        <label>datalist label</label>
        <input />
        <datalist>
          <option value="value 1">one</option>
          <option value="value 2">two</option>
          <option value="value 3">three</option>
        </datalist>
      </li-datalist>
    `;
    await waitForComponent('li-datalist');
    component = testElement.querySelector<LithiumDatalist>('li-datalist');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render a datalist input with appropriate slots', async () => {
    await componentIsStable(component);
    const slots = getComponentSlotContent(component);
    expect(slots.default.includes('datalist label')).toBe(true);
  });

  it('should associate the input with the datalist', async () => {
    await componentIsStable(component);
    const input = testElement.querySelector('input');
    const datalist = testElement.querySelector('datalist');
    expect(input.getAttribute('list')).toBe(datalist.getAttribute('id'));
  });
});
