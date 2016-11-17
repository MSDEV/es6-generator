# es6-generator
ES6 - Generator

### What is Generator?
Is a function that can be entered and exit multiple times!

### What does it do?
We can run some code and return a value and go right back into the function at the same place you left it.

### Iterations with generators
```
function* carShop() {
    const myInventory = yield 'MONEY';

    return myInventory;
}

const gen = carShop();
gen.next();
gen.next('FORD F150');
```

### Generator delegation
```
```

### Generator with Symbol.iterator
```
```

### How to run
```
node index.js
```
