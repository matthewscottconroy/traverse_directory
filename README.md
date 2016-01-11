# traverse_directory
A node module for traversing a directory recursively and performing a
user-provided function on each.

##How to use
```
const traverseDirectory = require('traverse_directory');
let pathToDirectory = "path/to/directory";

function manipulateFile(filename, pathToFile){
  //add code to perform on each file
  //e.g. console.log(pathToFile + "/" + filename);
}

traverseDirectory(pathToDirectory, manipulateFile);
```

##API

### `traverseDirectory(directoryPath, performAction)`

`directoryPath` - A string indicating the path to the directory you wish to
                  traverse

`performAction(filename, pathToFile)` - A user-provided function performed for
                  each file in `directoryPath`'s tree

                  * `filename` - the current file being operated on

                  * `pathToFile` - the path to the current file

Recursively walks the directory indicated by `directoryPath` and asynchronously
applies the user-provided function, `performAction` for each file found.
