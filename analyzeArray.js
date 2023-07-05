// An analyzeArray function that takes an array of numbers 

// and returns an object with the following properties: 

// average, min, max, and length.



// plan 
// this problem will take a function which accepts an array of numbers, 

// the function will return an object, 

// I think I wiLL have a main function 

// then helper functons which calculate the average, min , max, and length 

// how will I add properties onto the object 

// the helper functions will calculate the value, and add the properties 

// to the object, 


// function analyzeArray(array) { 

//     // let min = findArrMin(array); 
    
//     // let max = findArrMax(array); 

//     // Object.assign() use that method to assign properties to the obj

//     let object = { 
//         average: '',
//         min: '',
//         max: '',
//         length: '',
//     };

//     let inputArray = array; 

//     console.log(inputArray); 


// } 

// console.log(analyzeArray([1,8,3,4,2,6])); 


// An analyzeArray function that takes an array of numbers 

// and returns an object with the following properties: 

// average, min, max, and length. 


// function 

// takes an array 

// it returns an object with the properties for min, max, length and avg calculated 

// why am I having difficulty finding the min and the max of the number 

// do I need another function? 

// how can I calculate it's min and max? 

// I am able to access the array but why am I not able to apply the Math operators to it??? 

// 

function analyzeArray(array) { 
    let inputArray = array; 

    let inputArrayLength = inputArray.length; 

    return { 
        length: inputArrayLength,
        // max: maxValue,
    }
}

const object = analyzeArray([1,8,3,4,2,6]);

console.log(analyzeArray(object));