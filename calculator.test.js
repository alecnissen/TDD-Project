const calculator = require('./calculator');

test('returns the correct calculation within the object', () => { 
    expect(calculator.add(2, 2)).toEqual(4);
    expect(calculator.subtract(10, 2)).toEqual(8);
    expect(calculator.multiply(5, 5)).toEqual(25);
    expect(calculator.divide(20, 5)).toEqual(4);
});