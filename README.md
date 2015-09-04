### Dependencies:

* node.js
* mongoDB
* npm

### Usage:

Call program from the command shell with a cat name:

```
// Initialize mongoDB (one terminal window)
> mongod

// Run model (different terminal window)
> node main CAT-NAME DOG-NAME

// 1st argv = cat name
// 2nd argv = dog name
// 1 argv defaults to cat name
> node main FLUFFY              // FLUFFY is cat_name
```

Cat is saved to listing of all cats.

### ToDo:

- [ ] Revision to module pattern
- [x] Create multi-dir layers
- [x] Maintain global modules / schemas through dir
