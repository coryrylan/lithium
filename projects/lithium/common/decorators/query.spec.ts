// suite('@query', () => {
//   @customElement(generateElementName() as keyof HTMLElementTagNameMap)
//   class C extends LitElement {
//     @query('#blah') blah?: HTMLDivElement;

//     @query('span') nope?: HTMLSpanElement;

//     render() {
//       return html`
//         <div>Not this one</div>
//         <div id="blah">This one</div>
//       `;
//     }
//   }

//   test('returns an element when it exists', async () => {
//     const c = new C();
//     container.appendChild(c);
//     await c.updateComplete;
//     const div = c.blah;
//     assert.instanceOf(div, HTMLDivElement);
//     assert.equal(div!.innerText, 'This one');
//   });

//   test('returns null when no match', async () => {
//     const c = new C();
//     container.appendChild(c);
//     await c.updateComplete;
//     const span = c.nope;
//     assert.isNull(span);
//   });
// });

// suite('@queryAll', () => {
//   @customElement(generateElementName() as keyof HTMLElementTagNameMap)
//   class C extends LitElement {
//     @queryAll('div') divs!: NodeList;

//     @queryAll('span') spans!: NodeList;

//     render() {
//       return html`
//         <div>Not this one</div>
//         <div id="blah">This one</div>
//       `;
//     }
//   }

//   test('returns elements when they exists', async () => {
//     const c = new C();
//     container.appendChild(c);
//     await c.updateComplete;
//     const divs = c.divs;
//     // This is not true in ShadyDOM:
//     // assert.instanceOf(divs, NodeList);
//     assert.lengthOf(divs, 2);
//   });

//   test('returns empty NodeList when no match', async () => {
//     const c = new C();
//     container.appendChild(c);
//     await c.updateComplete;
//     const spans = c.spans;
//     // This is not true in ShadyDOM:
//     // assert.instanceOf(divs, NodeList);
//     assert.lengthOf(spans, 0);
//   });
// });
