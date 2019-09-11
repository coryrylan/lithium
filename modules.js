'use strict';

const fs = require('fs');

// Temporary script needed for modern build toolchains that default and expect es2015 modules as the main entry point.
// https://github.com/ng-packagr/ng-packagr/pull/1372
// https://github.com/ng-packagr/ng-packagr/issues/1318
function upgradeModule(file) {
  const data = JSON.parse(fs.readFileSync(file));
  data.module = data.module.replace('fesm5', 'fesm2015');
  fs.writeFileSync(file, JSON.stringify(data, null, 4));
}

function getFiles(dir, done) {
  let results = [];
  fs.readdir(dir, (err, list) => {
    let i = 0;
    (function next() {
      let file = list[i++];
      if (!file) return done(null, results);
      file = dir + '/' + file;
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          getFiles(file, (err, res) => {
            results = results.concat(res);
            next();
          });
        } else {
          results.push(file);
          next();
        }
      });
    })();
  });
}

getFiles('./dist/lithium', (err, results) => 
  results.filter(file => file.includes('package.json')).forEach(file => upgradeModule(file)));
