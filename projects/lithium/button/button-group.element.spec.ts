import 'lithium-ui/button';
import { LithiumButtonGroup } from 'lithium-ui/button';
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement, waitForComponent } from 'lithium-ui/test/utils';

describe('card element', () => {
  let testElement: HTMLElement;
  let component: LithiumButtonGroup;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-button-group>
        <li-button>item 1</li-button>
        <li-button>item 2</li-button>
      </li-button-group>
    `;
    await waitForComponent('li-button-group');
    component = testElement.querySelector<LithiumButtonGroup>('li-button-group');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render a button group with appropriate slots', async () => {
    await componentIsStable(component);
    const slots = getComponentSlotContent(component);
    expect(slots.default).toContain('item 1');
  });
});
