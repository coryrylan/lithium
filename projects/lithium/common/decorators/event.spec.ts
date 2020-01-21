import { LitElement } from 'lit-element';
import { event, EventEmitter, registerElementSafely } from 'lithium-ui/common';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from 'lithium-ui/test/utils';

export class TestElement extends LitElement {
  @event() test: EventEmitter<string>;
}

registerElementSafely('test-event-decorator', TestElement);

describe('event decorator', () => {
  let testElement: HTMLElement;
  let component: TestElement;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `<test-event-decorator></test-event-decorator>`;

    await waitForComponent('test-event-decorator');
    component = testElement.querySelector<TestElement>('test-event-decorator');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create a event listener with a generic type', async () => {
    await componentIsStable(component);
    let value: any;
    component.addEventListener('test', (e: any) => (value = e.detail));
    component.test.emit('hello');

    await componentIsStable(component);
    expect(value).toBe('hello');
  });
});
