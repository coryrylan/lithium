import 'lithium-ui/card';
import { LithiumCard } from 'lithium-ui/card';
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement, waitForComponent } from 'lithium-ui/test/utils';

describe('card element', () => {
  let testElement: HTMLElement;
  let component: LithiumCard;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-card>
        <span slot="header">hello header</span>
        <span>hello world</span>
        <span slot="footer">hello footer</span>
      </li-card>
    `;
    await waitForComponent('li-card');
    component = testElement.querySelector<LithiumCard>('li-card');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render a card with appropriate slots', async () => {
    await componentIsStable(component);

    const slots = getComponentSlotContent(component);
    expect(slots.default).toBe('<span>hello world</span>');
    expect(slots.header).toBe('<span slot="header">hello header</span>');
    expect(slots.footer).toBe('<span slot="footer">hello footer</span>');
  });
});
