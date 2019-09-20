import 'lithium-ui/radio';
import { LithiumRadio } from 'lithium-ui/radio';
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement, waitForComponent } from 'lithium-ui/test/utils';

describe('radio element', () => {
  let testElement: HTMLElement;
  let component: LithiumRadio;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-radio-group>
        <li-radio>
          <input type="radio" value="test value" checked />
          <label>test label</label>
        </li-radio>
      </li-radio-group>
    `;
    await waitForComponent('li-radio');
    component = testElement.querySelector<LithiumRadio>('li-radio');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render a radio input with appropriate slots', async () => {
    await componentIsStable(component);
    const slots = getComponentSlotContent(component);
    expect(slots.default.includes('test label')).toBe(true);
  });

  it('should apply the checked style attribute when input is checked', async () => {
    await componentIsStable(component);
    const input = component.querySelector('label');
    input.click();
    await componentIsStable(component);
    expect(component.getAttribute('checked')).toBe('');
  });

  it('should apply the focused style attribute when input is focused', async () => {
    await componentIsStable(component);
    const input = component.querySelector('input');
    input.dispatchEvent(new Event('focusin'));
    expect(component.getAttribute('focused')).toBe('');
    input.dispatchEvent(new Event('focusout'));
    expect(component.getAttribute('focused')).toBe(null);
  });

  it('should add the disabled style attribute when input is disabled', async () => {
    const input = component.querySelector('input');
    input.setAttribute('disabled', '');
    await componentIsStable(component);
    expect(component.getAttribute('disabled')).toBe('');
  });

  it('should remove the disabled style attribute when input is not disabled', async () => {
    await componentIsStable(component);
    expect(component.getAttribute('disabled')).toBe(null);
  });
});
