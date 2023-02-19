const { expect } = require('chai');
const findNewApartment = require('./findApartment');

describe('Tests', function () {
    describe('isGoodLocation', function () {
        it('validations check', () => {
            expect(() => {
                findNewApartment.isGoodLocation(5, true);
            }).to.throw('Invalid input!');
            expect(() => {
                findNewApartment.isGoodLocation('Sofia', 5);
            }).to.throw('Invalid input!');

        });
        it('check city (if)', () => {
            const city = 'London';
            const result = findNewApartment.isGoodLocation(city, true);
            expect(result).to.equal('This location is not suitable for you.')
        });
        it('check public transport (if)', () => {
            let result = findNewApartment.isGoodLocation('Sofia', true);
            expect(result).to.equal('You can go on home tour!');

            result = findNewApartment.isGoodLocation('Sofia', false);
            expect(result).to.equal('There is no public transport in area.');
        });
    });
    describe('isLargeEnough', function () {
        it('check validation', () => {
            const arr = [4, 5, 6];
            const emptyArr = [];
            expect(() => {
                findNewApartment.isLargeEnough('a', 5);
            }).to.throw('Invalid input!');
            expect(() => {
                findNewApartment.isLargeEnough(arr, '5');
            }).to.throw('Invalid input!');
            expect(() => {
                findNewApartment.isLargeEnough(emptyArr, 5);
            }).to.throw('Invalid input!');
        });
        it('check result', () => {
            const arr = [40, 5, 60];
            let result = findNewApartment.isLargeEnough(arr, 10);
            expect(result).to.equal('40, 60');

            result = findNewApartment.isLargeEnough(arr, 5);
            expect(result).to.equal('40, 5, 60');

        });
    });
    describe('isItAffordable', function () {
        it('check validations', () => {
            expect(() => {
                findNewApartment.isItAffordable('5', 5);
            }).to.throw('Invalid input!');

            expect(() => {
                findNewApartment.isItAffordable(5, '5');
            }).to.throw('Invalid input!');

            expect(() => {
                findNewApartment.isItAffordable('5', '5');
            }).to.throw('Invalid input!');

            expect(() => {
                findNewApartment.isItAffordable(-5, 5);
            }).to.throw('Invalid input!');

            expect(() => {
                findNewApartment.isItAffordable(5, -5);
            }).to.throw('Invalid input!');

            expect(() => {
                findNewApartment.isItAffordable(-5, -5);
            }).to.throw('Invalid input!');

            expect(() => {
                findNewApartment.isItAffordable(0, 5);
            }).to.throw('Invalid input!');

            expect(() => {
                findNewApartment.isItAffordable(5, 0);
            }).to.throw('Invalid input!');

            expect(() => {
                findNewApartment.isItAffordable(0, 0);
            }).to.throw('Invalid input!');
        });
        it('check result', () => {
            let result = findNewApartment.isItAffordable(4000, 5000);
            expect(result).to.equal('You can afford this home!');

            result = findNewApartment.isItAffordable(5000,5000);
            expect(result).to.equal(`You can afford this home!`);

            result = findNewApartment.isItAffordable(5000,4000);
            expect(result).to.equal(`You don't have enough money for this house!`);
        });
    });
});