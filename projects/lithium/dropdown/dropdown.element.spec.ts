import { registerElementSafely } from 'lithium-ui/common';
import { createTestElement, waitForComponent, removeTestElement, componentIsStable, getComponentSlotContent } from 'lithium-ui/test/utils';
import { XDropdown } from './dropdown.element';

registerElementSafely('x-dropdown', XDropdown);

describe('dropdown test element', () => {
  let testElement: HTMLElement;
  let component: XDropdown;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <x-dropdown title="custom title">
        <span>hello world</span>
      </x-dropdown>
    `;
    await waitForComponent('x-dropdown');
    component = testElement.querySelector<XDropdown>('x-dropdown');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render dynamic content in slot', async () => {
    await componentIsStable(component);
    const button = component.shadowRoot.querySelector('button');

    expect(button.innerText).toBe('custom title');

    button.click();
    await componentIsStable(component);

    const slots = getComponentSlotContent(component);
    expect(slots.default).toBe('<span>hello world</span>');
  });
});
