const capitalize = require('./capitalize');

test('capitalizes the first character in the string', () => { 
    // expect(capitalize('alec')).toMatch('Alec');
    expect(capitalize('judo')).toMatch('Judo');
}); 

