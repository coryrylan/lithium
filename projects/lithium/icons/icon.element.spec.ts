import 'lithium-ui/icons';
import { LithiumIcon, IconService, menuIcon } from 'lithium-ui/icons';
IconService.addIcons(menuIcon);
import { createTestElement, waitForComponent, removeTestElement, componentIsStable, getComponentSlotContent } from 'lithium-ui/test/utils';

describe('icon element', () => {
  let testElement: HTMLElement;
  let component: LithiumIcon;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `<li-icon></li-icon>`;
    await waitForComponent('li-icon');
    component = testElement.querySelector<LithiumIcon>('li-icon');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render a icon with default fallback', async () => {
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain('li-icon-unknown');
  });

  it('should render a icon with set name', async () => {
    component.name = 'menu';
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain('li-icon-menu');
  });
});
