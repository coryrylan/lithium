"use strict";

const fs = require("fs");
const PATH = "./projects/docs/src/assets/api.json";

const classes = JSON.parse(fs.readFileSync(PATH));

fs.writeFileSync(PATH, JSON.stringify(iterate(classes), null, 2));

function iterate(obj) {
  Object.keys(obj).forEach(key => {
    if (
      key === 'originalName' ||
      key === 'fileName' ||
      key === 'inheritedFrom' ||
      key === 'sources') {
      obj[key] = undefined;
    } else if (Array.isArray(obj[key])) {
      obj[key].forEach((o, k) => {
        if (typeof o === 'object') {
          iterate(o);
        }
      });
    } else if (!Array.isArray(obj[key]) && typeof obj[key] === 'object') {
      iterate(obj[key]);
    }
  });

  return obj;
};

function removeMarkdown(classes) {
  classes
    .filter(c => c.comment)
    .forEach(c =>
      c.comment.tags.forEach(t => (t.text = t.text.replace(/`/g, "")))
    );

  return classes;
}
