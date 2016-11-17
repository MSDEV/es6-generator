# es6-generator
ES6 - Generator

### What is Generator?
Is a function that can be entered and exit multiple times!

### What does it do?
We can run some code and return a value and go right back into the function at the same place you left it.

### Iterations with generators
```
function* carShop() {
    //RUN IT FIRST TIME UNTIL GET THE YELD
    console.log('going to buy my car....');
    
    const myInventory = yield 'MONEY';

    console.log('bought my car....');

    return myInventory;
}

const gen = carShop();
var firstCall = gen.next();
console.log(firstCall);

var secondCall = gen.next('FORD F150');
console.log(secondCall);
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
