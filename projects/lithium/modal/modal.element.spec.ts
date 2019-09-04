import 'lithium-ui/modal';
import { LithiumModal } from 'lithium-ui/modal';
import { createTestElement, waitForComponent, removeTestElement, componentIsStable, getComponentSlotContent } from 'lithium-ui/test/utils';

describe('modal element', () => {
  let testElement: HTMLElement;
  let component: LithiumModal;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-modal>
        <span>hello world</span>
      </li-modal>
    `;
    await waitForComponent('li-modal');
    component = testElement.querySelector<LithiumModal>('li-modal');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render a modal when opened', async () => {
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).not.toContain('li-modal-content');

    component.toggle();
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain('li-modal-content');
  });

  it('should have appropriate role for a11y', async () => {
    component.toggle();
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain('role="dialog"');
  });

  it('should open or close programmatically', async () => {
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).not.toContain('li-modal-content');

    component.open = true;
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain('li-modal-content');

    component.open = false;
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).not.toContain('li-modal-content');
  });

  it('should emit a custom event when opened or closed', async () => {
    let event: any;
    await componentIsStable(component);
    component.addEventListener('openChange', (e: any) => (event = e));

    component.open = true;
    await componentIsStable(component);

    expect(event.detail).toBe(true);
  });

  it('should close modal when user closes it', async () => {
    await componentIsStable(component);
    component.toggle();

    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain('li-modal-content');

    component.shadowRoot.querySelector<HTMLButtonElement>('.li-modal-close-btn').click();
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).not.toContain('li-modal-content');

    component.toggle();
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain('li-modal-content');

    component.shadowRoot.querySelector<HTMLButtonElement>('.li-modal-backdrop').click();
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).not.toContain('li-modal-content');
  });
});
