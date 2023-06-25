const reverseString = require('./reverseString');

test('reverses a string', () => { 
    expect(reverseString('jiu jitsu')).toMatch('ustij uij');
});