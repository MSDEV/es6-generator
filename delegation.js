const ford = {
    sellLeader: 'F150',
    sellLeaderPrice: '39k USD'
};

const chevy = {
    sellLeader: 'Silverado',
    sellLeaderPrice: '38.900k USD'
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
    
    
    const fordIterator = BrandIterator(car.ford);
    yield* fordIterator;  

    const chevyIterator = BrandIterator(car.chevy);
    yield* chevyIterator;
    
    yield `Leader 2016: ${car.marketLeader}`;
}

function* BrandIterator(brand) {
    yield brand.sellLeader;
    yield brand.sellLeaderPrice;
}

const weirdExample = [];
for (let item of CarIterator(car)) {
    weirdExample.push(item);
}

console.log(weirdExample);