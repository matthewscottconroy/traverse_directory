'use strict';

let fs = require('fs');
let path = require('path');

function traverseDirectory(currentDirectory, ax) {
  fs.readdir(currentDirectory, function(err, files) {
    if (err) {
      return console.log(err);
    }

    for (let i = 0; i < files.length; i++) {
      fs.stat(currentDirectory + path.sep + files[i], (err, stats) => {
        if (stats.isDirectory()) {
          traverseDirectory(currentDirectory + path.sep + files[i], ax);
        } else {
          ax(files[i], currentDirectory);
        }
      });
    }
  });
}

module.exports = traverseDirectory;
