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

// why am I getting NAN, I am 

// can we make a result variable, loop thru the array, add to the result 

// then set a variable so we can determine the min value

// what I am now trying to do is, get the min value of the array 

// I set the input array to a variable, 

// then I will loop, add onto a result variable, then take the min value

// confused on why math.min is not working, I've tried using spread operator, 

// but it only works when I pass in the array instead of a variable containing the array 

// try average, 

// trying to find the average in the array, 

// I think instead of doing the calculation, 

// return it using the math method 

function analyzeArray(array) { 
    let sum = 0; 
    let inputArray = array;
    let inputArrayLength = inputArray.length;
    for (let i = 0; i < inputArray.length; i++) { 
        let num = inputArray[i];
        sum += num;
    } 
    
    let avg = sum / inputArrayLength; // it needed to be outside of the loop, 

    // let newArr = [...inputArray];

    let minNumber = Math.min(...inputArray); 

    let maxNumber = Math.max(...inputArray);


    // console.log(newArr);

    console.log(maxNumber);

    // scope issue, avg was getting updated each time with the latest value, 

    // place outside of the loop, then call the function just once. 
    return { 
        average: avg,
        length: inputArrayLength,
        min: minNumber,
        max: maxNumber
    };
} 

 const array = analyzeArray([1, 8, 3, 4, 2, 6]);

console.log(array); 

// Nex I will figure out min, 

// I think you will need to use some type of method, 

// like math.min, but remeber before it wa returning not a number, 

// is there a way to just return the object with the min value? 






// you were calling the function again, 

// let x = [1, 10, 60];

// let minValue = Math.min.apply(x);

// console.log(minValue);

// console.log(Math.min(10, 20, 30)); 


// let sum = 0 

// let arr = [9, 1, 2, 3];

// for (let i = 0; i < arr.length; i++) { 
//     let num = arr[i];

//     sum += num; 
// } 

// let avg = sum / arr.length; 

// console.log(avg);