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


for (let car of cars()) {
    console.log(car);
}