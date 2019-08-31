export function createTestElement(): HTMLElement {
  const element = document.createElement('div');
  document.body.appendChild(element);
  return element;
}

export function removeTestElement(element: HTMLElement) {
  element.remove();
}

export function waitForComponent(elementName: string): Promise<void> {
  return window.customElements.whenDefined(elementName);
}

export function componentIsStable(component: any) {
  return retry(() => new Promise(async (resolve, reject) => {
    const stable = await component.updateComplete;

    if (stable) {
      resolve('success');
    } else {
      reject('error');
    }
  }));
}

function retry(fn, maxTries = 10, promise?: Promise<any>, promiseObject?: { resolve: any, reject: any }) {
  maxTries--;
  promiseObject = promiseObject || {
    resolve: null,
    reject: null
  };

  promise = promise || new Promise((resolve, reject) => {
    promiseObject.resolve = resolve;
    promiseObject.reject = reject;
  });

  fn().then(result => {
    promiseObject.resolve(result);
  }).catch(() => {
    if (maxTries > 0) {
      retry(fn, maxTries, promise, promiseObject);
    } else {
      promiseObject.reject('Max attempts reached');
    }
  });

  return promise;
}
