import 'lithium-ui/message';
import { LithiumMessage, LithiumMessageType } from 'lithium-ui/message';
import { createTestElement, waitForComponent, removeTestElement, componentIsStable, getComponentSlotContent } from 'lithium-ui/test/utils';


describe('card element', () => {
  let testElement: HTMLElement;
  let component: LithiumMessage;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-message>
        <span>hello world</span>
      </li-message>
    `;
    await waitForComponent('li-message');
    component = testElement.querySelector<LithiumMessage>('li-message');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render a message with appropriate slots', async () => {
    await componentIsStable(component);
    const slots = getComponentSlotContent(component);
    expect(slots.default).toBe('<span>hello world</span>');
  });

  it('should set appropriate aria live attribute', async () => {
    await componentIsStable(component);
    expect(component.getAttribute('aria-live')).toBe('polite');
  });

  it('should hide content if closed programmatically', async () => {
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain('li-message');
    component.close = true;
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).not.toContain('li-message');
  });

  it('should hide content if close button clicked', async () => {
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain('li-message');

    component.closable = true;
    await componentIsStable(component);

    const button = component.shadowRoot.querySelector<HTMLButtonElement>('.li-close-btn');
    button.click();
    await componentIsStable(component);

    expect(component.shadowRoot.innerHTML).not.toContain('li-message');
  });

  it('should show appropriate icon status', async () => {
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain('li-icon name="info"');

    component.type = LithiumMessageType.Error;
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain('li-icon name="error"');

    component.type = LithiumMessageType.Success;
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain('li-icon name="check"');

    component.type = LithiumMessageType.Warning;
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain('li-icon name="warning"');
  });
});
