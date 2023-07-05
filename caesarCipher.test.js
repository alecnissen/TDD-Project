const caesarCipher = require('./caesarCipher');

test('returns the correct character after the shift is applied', () => {
    expect(caesarCipher('a', 1)).toEqual('b');
    expect(caesarCipher('C', 3)).toEqual('F');
    expect(caesarCipher('z', 5)).toEqual('e');
    expect(caesarCipher('Z', 10)).toEqual('J');
});


// test upper, lower, wrapping 