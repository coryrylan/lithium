import 'lithium-ui/checkbox';
import { LithiumCheckbox } from 'lithium-ui/checkbox';
import { createTestElement, waitForComponent, removeTestElement, componentIsStable, getComponentSlotContent } from 'lithium-ui/test/utils';

describe('checkbox element', () => {
  let testElement: HTMLElement;
  let component: LithiumCheckbox;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-checkbox>
        <label>test label</label>
        <input type="checkbox" />
      </li-checkbox>
    `;
    await waitForComponent('li-checkbox');
    component = testElement.querySelector<LithiumCheckbox>('li-checkbox');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render a checkbox with appropriate slots', async () => {
    await componentIsStable(component);
    const slots = getComponentSlotContent(component);
    expect(slots.default.includes('test label')).toBe(true);
  });

  it('should apply the checked style attribute when input is checked', async () => {
    await componentIsStable(component);
    const input = component.querySelector('input');
    input.click();
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
    await componentIsStable(component);
    const input = component.querySelector('input');
    input.disabled = true;
    input.setAttribute('disabled', '');
    expect(component.getAttribute('disabled')).toBe(null);
  });
});
