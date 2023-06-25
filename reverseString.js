// A reverseString function that takes a string and 

// returns it reversed. 

// reverse function, 

// init function, 

// takes a string, 

// set var for string 

// loop through the string backwards and return the str 


function reverseString(str) { 
    let string = str; 

     let theReversedString = '';

    for (let i = string.length - 1; i >= 0; i--) { 
        theReversedString += string[i];
    } 

    return theReversedString;
} 

module.exports = reverseString;

// console.log(reverseString('jiu jitsu'));

