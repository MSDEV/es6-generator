/*
Iterations with generators
*/
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