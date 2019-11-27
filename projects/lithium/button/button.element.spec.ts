import 'lithium-ui/button';
import { LithiumButton } from 'lithium-ui/button';
import { AriaRole } from 'lithium-ui/common';
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement, waitForComponent } from 'lithium-ui/test/utils';

describe('button', () => {
  let testElement: HTMLElement;
  let component: LithiumButton;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <form>
        <li-button>
          <span>Hello World</span>
        </li-button>
      </form>
    `;
    await waitForComponent('li-button');
    component = testElement.querySelector<LithiumButton>('li-button');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
    expect(component.innerText).toBe('Hello World');
  });

  it('should have a tab index of 0 to be able to focus', () => {
    expect(component.getAttribute('tabindex')).toBe('0');
  });

  it('should have a role of type button', async () => {
    await componentIsStable(component);
    expect(component.getAttribute('role')).toBe(AriaRole.Button);
  });

  it('should remove button from tab index if disabled', async () => {
    expect(component.getAttribute('tabindex')).toBe('0');
    component.disabled = true;
    await componentIsStable(component);
    expect(component.hasAttribute('disabled')).toBe(true);
    expect(component.getAttribute('tabindex')).toBe('-1');
  });

  it('should work with form elements when clicked', async done => {
    await componentIsStable(component);
    testElement.querySelector('form').addEventListener('submit', e => {
      e.preventDefault();
      expect(true).toBe(true);
      done();
    });

    component.click();
  });

  it('should work with form elements when clicked via keyboard', async done => {
    await componentIsStable(component);
    testElement.querySelector('form').addEventListener('submit', e => {
      e.preventDefault();
      expect(true).toBe(true);
      done();
    });

    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    component.focus();
    component.dispatchEvent(event);
  });

  // todo: fix async
  it('should not interact with form elements if disabled', async () => {
    component.disabled = true;
    await componentIsStable(component);
    const o = { f: () => {} };
    spyOn(o, 'f');
    testElement.querySelector('form').addEventListener('submit', o.f);
    expect(o.f).not.toHaveBeenCalled();
  });

  it('should show loading spinner', async () => {
    component.loading = true;
    await componentIsStable(component);
    expect(component.renderRoot.querySelector('li-loading-spinner')).toBeTruthy();
  });

  it('should render a button with appropriate slots', async () => {
    await componentIsStable(component);
    const slots = getComponentSlotContent(component);
    expect(slots.default.includes('<span>Hello World</span>')).toBe(true);
  });

  it('should remove button attributes when set to readonly', async () => {
    component.readonly = true;
    await componentIsStable(component);
    expect(testElement.querySelector('li-button').hasAttribute('role')).toBe(false);
    expect(testElement.querySelector('li-button').hasAttribute('tabindex')).toBe(false);
  });

  it('should prevent click when readonly or disabled', async () => {
    component.disabled = true;
    await componentIsStable(component);
    const style = getComputedStyle(testElement.querySelector('li-button'));
    expect(style.pointerEvents).toBe('none');
  });
});

describe('button link', () => {
  let testElement: HTMLElement;
  let component: LithiumButton;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `<li-button><a href="about">About</a></li-button>`;
    await waitForComponent('li-button');
    component = testElement.querySelector<LithiumButton>('li-button');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render a link properly', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
    expect(component.innerText).toBe('About');
  });

  it('should set outer host to have a role of presentation', async () => {
    await componentIsStable(component);
    expect(component.getAttribute('role')).toBe(AriaRole.Presentation);
  });
});
