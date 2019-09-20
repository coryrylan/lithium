import 'lithium-ui/icons';
import { IconService, LithiumIcon, menuIcon } from 'lithium-ui/icons';
IconService.addIcons(menuIcon);
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement, waitForComponent } from 'lithium-ui/test/utils';

describe('icon element', () => {
  let testElement: HTMLElement;
  let component: LithiumIcon;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `<li-icon>test</li-icon>`;
    await waitForComponent('li-icon');
    component = testElement.querySelector<LithiumIcon>('li-icon');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render a icon with default fallback', async () => {
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain('li-icon-unknown');

    component.name = 'hi';
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain('li-icon-unknown');
  });

  it('should render a icon with set name', async () => {
    component.name = 'menu';
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain('li-icon-menu');
  });

  it('should associate the svg image to a label using aria-labelledby', async () => {
    await componentIsStable(component);
    const svg = component.shadowRoot.querySelector('svg');
    const labelId = component.shadowRoot.querySelector('.li-sr-only').getAttribute('id');
    expect(svg.getAttribute('aria-labelledby')).toBe(labelId);
    expect(svg.getAttribute('role')).toBe('img');
  });
});
