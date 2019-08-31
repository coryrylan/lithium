import 'lithium-ui/card';
import { LithiumCard } from 'lithium-ui/card';
import { createTestElement, waitForComponent, removeTestElement, componentIsStable } from 'lithium-ui/test/utils';

describe('card element', () => {
  let testElement: HTMLElement;
  let component: LithiumCard;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `<li-card>hello world</li-card>`;
    await waitForComponent('li-card');
    component = testElement.querySelector<LithiumCard>('li-card');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render a card properly', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
    expect(component.innerText).toBe('hello world');
  });
});
