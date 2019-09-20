import 'lithium-ui/tabs';
import { LithiumTabs } from 'lithium-ui/tabs';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from 'lithium-ui/test/utils';

describe('side nav element', () => {
  let testElement: HTMLElement;
  let component: LithiumTabs;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <li-tabs>
        <li-tab-title>Tab 1 Title</li-tab-title>
        <li-tab-title>Tab 2 Title</li-tab-title>
        <li-tab>
          <h2>Tab 1 Body</h2>
        </li-tab>
        <li-tab>
          <h2>Tab 2 Body</h2>
        </li-tab>
      </li-tabs>
    `;
    await waitForComponent('li-tabs');
    component = testElement.querySelector<LithiumTabs>('li-tabs');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render the first tab', async () => {
    await componentIsStable(component);
    const tab1 = component.querySelectorAll<LithiumTabs>('li-tab')[0];
    const tab2 = component.querySelectorAll<LithiumTabs>('li-tab')[1];
    expect(tab1.getAttribute('aria-hidden')).toBeFalsy();
    expect(tab2.getAttribute('aria-hidden')).toBe('true');
  });

  it('should render the second tab when clicked', async () => {
    await componentIsStable(component);
    const tabTitle2 = component.querySelectorAll<LithiumTabs>('li-tab-title')[1];
    tabTitle2.click();

    const tab1 = component.querySelectorAll<LithiumTabs>('li-tab')[0];
    const tab2 = component.querySelectorAll<LithiumTabs>('li-tab')[1];
    expect(tab2.getAttribute('aria-hidden')).toBeFalsy();
    expect(tab1.getAttribute('aria-hidden')).toBe('true');
  });

  it('should associate tab buttons to tab panels', async () => {
    await componentIsStable(component);
    const button = component.shadowRoot.querySelectorAll('button')[0];
    expect(button.id).toBe(component.querySelectorAll('li-tab')[0].getAttribute('aria-labelledby'));
  });
});
