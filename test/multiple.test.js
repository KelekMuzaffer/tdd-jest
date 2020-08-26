const multiple = require("../src/multiple")

test('multiple 1 * 2 to equal 2', () => {
    expect(multiple(1, 2)).toBe(2);
});
test('Test failed because must be a number', () => {

    expect( () => multiple(1, "t")).toThrow(Error);


});