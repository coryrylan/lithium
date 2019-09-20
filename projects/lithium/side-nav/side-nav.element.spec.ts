import 'lithium-ui/side-nav';
import { LithiumSideNav } from 'lithium-ui/side-nav';
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement, waitForComponent } from 'lithium-ui/test/utils';

describe('side nav element', () => {
  let testElement: HTMLElement;
  let component: LithiumSideNav;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-side-nav>
        <a href="#">Getting Started</a>
        <a href="#">Modal</a>
      </li-side-nav>
    `;
    await waitForComponent('li-side-nav');
    component = testElement.querySelector<LithiumSideNav>('li-side-nav');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render a side nav when opened', async () => {
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('.li-side-nav-open')).toBeFalsy();

    component.toggle();
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('.li-side-nav-open')).toBeTruthy();
  });

  it('should close the side nav when programmatically closed', async () => {
    component.open = true;
    await componentIsStable(component);

    component.close();
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('.li-side-nav-open')).toBeFalsy();
  });

  it('should hide heading when in sticky mode', async () => {
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('.li-menu-heading')).toBeTruthy();

    component.sticky = true;
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('.li-menu-heading')).toBeFalsy();
  });

  it('should close when close button or background is clicked', async () => {
    await componentIsStable(component);
    const closeBtn = component.shadowRoot.querySelector<HTMLButtonElement>('.li-menu-close-btn');
    closeBtn.click();
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('.li-side-nav-open')).toBeFalsy();

    component.open = true;
    await componentIsStable(component);
    const backdrop = component.shadowRoot.querySelector<HTMLButtonElement>('.li-side-nav-backdrop');
    backdrop.click();
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('.li-side-nav-open')).toBeFalsy();
  });

  it('should close when a internal link is clicked', async () => {
    component.open = true;
    await componentIsStable(component);
    const nav = component.shadowRoot.querySelector<HTMLElement>('.li-inner-nav');
    nav.click();
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('.li-side-nav-open')).toBeFalsy();
  });
});
