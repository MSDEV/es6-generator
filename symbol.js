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
    marketLeader: 'Ford',
    [Symbol.iterator]: function* () {
        yield `Nr Brand Leaders ${this.nrBrands}`;
        yield `Avg Price: ${this.avgPrice}`;
    
        yield* this.ford;  

        yield* this.chevy;
    
        yield `Leader 2016: ${this.marketLeader}`;
    }
};

const weirdExample = [];
for (let item of car) {
    weirdExample.push(item);
}

console.log(weirdExample);