'use strict';

const fs = require('fs-extra');
const path = require('path');
const del = require('del');

// Temporary script needed for modern build tools that default that expect es2015 modules as the main entry point.
// https://github.com/ng-packagr/ng-packagr/pull/1372
// https://github.com/ng-packagr/ng-packagr/issues/1318
// https://github.com/angular/angular/issues/33395
// https://justinfagnani.com/2019/11/01/how-to-publish-web-components-to-npm/
const read = (dir) => fs.readdirSync(dir).reduce((files, file) =>
  fs.statSync(path.join(dir, file)).isDirectory() ?
    files.concat(read(path.join(dir, file))) :
    files.concat(path.join(dir, file)),
  []);

del.sync(['./dist/lithium/**/*.{tsbuildinfo,ngsummary.json}', './dist/lithium/*.{tsbuildinfo,ngsummary.json}']);

read('./dist/lithium').filter(f => f.includes('package.json')).forEach(file => {
  const data = fs.readJsonSync(file);
  ['__processed_by_ivy_ngcc__', 'scripts'].forEach(p => delete data[p]);
  fs.writeJsonSync(file, data, { spaces: 2 });
});