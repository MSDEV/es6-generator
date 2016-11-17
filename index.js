/*
Iterations with generators
*/
function* carShop() {
    //RUN IT FIRST TIME UNTIL GET THE FIRST YELD
    console.log('going to buy my car....');
    
    const myInventory = yield 'MONEY';

    console.log('bought my car and going to insurance company....');

    const myInsurance = yield 'MORE MONEY';

    console.log('poor again....');

    return [myInventory, myInsurance];
}

const gen = carShop();
var firstCall = gen.next();
console.log(firstCall);

var secondCall = gen.next('FORD F150');
console.log(secondCall);

var thirdCall = gen.next('INSURANCE');
console.log(thirdCall);