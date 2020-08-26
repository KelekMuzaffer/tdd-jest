// Add the unit tests of the sum function here
const sum = require('../src/sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)

});
test('Test failed because must be a number', () => {

    expect(() => sum(1, "t")).toThrow(Error);

});
