export function registerElementSafely(tagName: string, elementClass: any) {
  const elementExists = !!customElements.get(tagName);

  if (elementExists) {
    console.warn(`${elementExists} has already been registered`);
  } else {
    customElements.define(tagName, elementClass);
  }
}
