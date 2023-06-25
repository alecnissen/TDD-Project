// A capitalize function that takes a string and 

// returns it with the first character capitalized. 

// init function, 

// function will take in a string, 

// tagert the first character in the string, and capitize it, 

// no loop needed just target the first character. 


function capitalize(str) { 

    let strCopy = str.slice(1); 

    let firstLetter = str[0];
    
    // console.log(firstLetter);

    let firstLetterToUpperCase = firstLetter.toUpperCase() + strCopy;

    console.log(firstLetterToUpperCase);

    return firstLetterToUpperCase;

} 

module.exports = capitalize;

// capitalize('alec');