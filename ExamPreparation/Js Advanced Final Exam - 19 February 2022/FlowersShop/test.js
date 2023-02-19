const { expect } = require('chai');
const flowerShop = require('./flowerShop');

describe('Tests', function () {
    describe('calcPriceOfFlowers', function () {
        it('correct calculation of flowers price', () => {
            let result = flowerShop.calcPriceOfFlowers('a', 2, 2);
            expect(result).to.equal('You need $4.00 to buy a!');
            result = flowerShop.calcPriceOfFlowers('a', 0, 2);
            expect(result).to.equal('You need $0.00 to buy a!');
        });
        it('invalid type throws error', () => {
            expect(() => {
                flowerShop.calcPriceOfFlowers(2, 1, 3);
            }).to.throw();
            expect(() => {
                flowerShop.calcPriceOfFlowers('a', 'b', 3);
            }).to.throw();
            expect(() => {
                flowerShop.calcPriceOfFlowers('a', 1, 'b');
            }).to.throw();
        });
    });
    describe('checkFlowersAvailable', function () {
        it('check return when flower is in the array', () => {
            const gardenArr = ['a', 'b', 'c'];
            const flower = 'a';
            const result = flowerShop.checkFlowersAvailable(flower, gardenArr);
            expect(result).to.equal('The a are available!');
        });
        it('check return when flower is not in the array', () => {
            const gardenArr = ['a', 'b', 'c'];
            const flower = 'd';
            const result = flowerShop.checkFlowersAvailable(flower, gardenArr);
            expect(result).to.equal('The d are sold! You need to purchase more!');
        });
    });
    describe('sellFlowers', function () {
        it('check validations', () => {
            const arr = ['a','b'];
            expect(()=>{
                flowerShop.sellFlowers('a',1);
            }).to.throw();
            expect(()=>{
                flowerShop.sellFlowers(arr,-1);
            }).to.throw();
            expect(()=>{
                flowerShop.sellFlowers(arr,3);
            }).to.throw();
            expect(()=>{
                flowerShop.sellFlowers(arr,'a');
            }).to.throw();
        });
        it('check if element is deleted', () =>{
            const gardenArr = ['a', 'b', 'c'];
            const space = 1;
            const result = flowerShop.sellFlowers(gardenArr, space);
            expect(result).to.equal('a / c');
        });
    });
});