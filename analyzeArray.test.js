const analyzeArray = require('./analyzeArray');

// test('takes an array of numbers and returns an object with the following properties: average, min, max, and length', () => { 
//     // expect(analyzeArray([1, 8, 3, 4, 2, 6]).toEqual(8));
//     expect(analyzeArray.max([1, 8, 3, 4, 2, 6])).toEqual(8);
// }); 

// this, use a seperate test for each, chain the function method onto it

test('finds the average of the array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toEqual(4);
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toEqual(1);
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toEqual(8);
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toEqual(6);
});

