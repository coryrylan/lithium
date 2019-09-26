import { html, LitElement } from 'lit-element';
import { querySlot, querySlotAll } from 'lithium-ui/common';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from 'lithium-ui/test/utils';
import { registerElementSafely } from '../utils/register';

class TestElement extends LitElement {
  @querySlot('#test') test: HTMLDivElement;
  @querySlotAll('.item') testItems: NodeListOf<HTMLDivElement>;

  render() {
    return html`
      <slot></slot>
    `;
  }
}

registerElementSafely('test-element', TestElement);

describe('query slot decorator', () => {
  let testElement: HTMLElement;
  let component: TestElement;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <test-element>
        <div id="test">hi</div>
        <div class="item">item 1</div>
        <div class="item">item 2</div>
        <div class="item">item 3</div>
      </test-element>
    `;
    await waitForComponent('test-element');
    component = testElement.querySelector<TestElement>('test-element');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should get a single element reference from a slotted element', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
    expect(component.test).toBeTruthy();
    expect(component.test.innerText).toBe('hi');
  });

  it('should get a Node List of element from slotted elements', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
    expect(component.testItems.length).toBe(3);
    expect(Array.from(component.testItems)[0].innerText).toBe('item 1');
  });
});
