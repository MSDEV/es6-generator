# es6-generator

### What is Generator?
Is a function that can be entered and exit multiple times!

### What does it do?
We can run some code and return a value and go right back into the function at the same place you left it.

### Iterations with generators
```
function* cars() {
    yield 'Focus';
    yield 'Fusion';
    yield 'F150';
    yield 'F250';
    yield 'EXPLORER';
}

const gen = cars();
gen.next(); //=> { "value": "Focus", "done":false }
gen.next(); //=> { "value": "Fusion", "done":false }
gen.next(); //=> { "value": "F150", "done":false }
gen.next(); //=> { "value": "F250", "done":false }
gen.next(); //=> { "value": "EXPLORER", "done":false }
gen.next(); //=> { "done":true }
```
### Why to use?
Works perfectly with for of loops :)

```
for (let car of cars()) {
    console.log(car);
}
```

### Generator delegation
```
Please, look at the delegation.js file.
```

### Generator with Symbol.iterator
```
```

### How to run
```
node index.js
or
node cars.js
or 
node delegation.js
```
