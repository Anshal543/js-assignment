const calculateTime = require('../medium/times');

describe('calculateTime', () => {
    test('returns the correct time for sum from 1 to n', () => {
        expect(calculateTime(100)).toBeLessThan(1);
        expect(calculateTime(100000)).toBeLessThan(5);
        expect(calculateTime(1000000000)).toBeLessThan(2000);
    });
});