'use strict';

const fs = require('fs');
const PATH = './projects/docs/src/assets/api.json';
const data = JSON.parse(fs.readFileSync(PATH));
const elements = [];

iterate(data.children);
fs.writeFileSync(PATH, JSON.stringify(elements, null, 0));

function iterate(obj) {
  Object.keys(obj).forEach(key => {
    const value = obj[key];

    if (hasUnnecessaryMetaData(key)) {
      obj[key] = undefined;
    } else if (Array.isArray(value)) {
      const element = value.find(
        o => o.comment && o.comment.tags && o.kind === 128
      );

      if (element) {
        removeMarkdownInTags(element);
        elements.push(element);
      } else {
        value.filter(o => typeof o === 'object').forEach(o => iterate(o));
      }
    } else if (valueIsObject(value)) {
      iterate(value);
    }
  });
}

function hasUnnecessaryMetaData(key) {
  return (
    key === 'originalName' ||
    key === 'fileName' ||
    key === 'inheritedFrom' ||
    key === 'sources'
  );
}

function removeMarkdownInTags(element) {
  element.comment.tags.forEach(t => (t.text = t.text.replace(/`/g, '')));
}

function valueIsObject(value) {
  return !Array.isArray(value) && typeof value === 'object';
}

