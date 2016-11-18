const ford = {
    sellLeader: 'F150',
    sellLeaderPrice: '39k USD',
    [Symbol.iterator]: function* () {  
        yield this.sellLeader;
        yield this.sellLeaderPrice;
    }
};

const chevy = {
    sellLeader: 'Silverado',
    sellLeaderPrice: '38.900k USD',
    [Symbol.iterator]: function* () {  
        yield this.sellLeader;
        yield this.sellLeaderPrice;
    }
};

const car = {
    ford,
    chevy,
    nrBrands: 2,
    avgPrice: '35k USD',
    marketLeader: 'Ford'
};

function* CarIterator(car) {
    yield `Nr Brand Leaders ${car.nrBrands}`;
    yield `Avg Price: ${car.avgPrice}`;
    
    yield* car.ford;  

    yield* car.chevy;
    
    yield `Leader 2016: ${car.marketLeader}`;
}

const weirdExample = [];
for (let item of CarIterator(car)) {
    weirdExample.push(item);
}

console.log(weirdExample);