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
        <li-card-header>hello header</li-card-header>
        <li-card-content>hello world</li-card-content>
        <li-card-actions>hello actions</li-card-actions>
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
    expect(slots.default).toBe('<li-card-content>hello world</li-card-content>');
    expect(slots.header).toBe('<li-card-header slot="header">hello header</li-card-header>');
    expect(slots.actions).toBe('<li-card-actions slot="actions">hello actions</li-card-actions>');
  });
});
