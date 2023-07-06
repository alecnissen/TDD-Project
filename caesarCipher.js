// A caesarCipher function that takes a string and a shift factor 

// and returns it with each character “shifted”. 



// takes in str 

// and shift factor, 

// depending on number it will shift that many places, 

// init alphabet variable, 

// init result variable 

// loop through alphabet, 

// take in a single value, 

// add that the shift factor to that single value, 

// add to result???  

// why do I need another helper function? 

// cant I do this with one function? 

// now I need to find a way to shift the characters

// confused on how I can add the shift factor, 

// based on number it will shift that many characters, 

// it will modify the character, 

// and add the number onto the character which will correlate to the letter in the alphabet 

// add the shift factor to the character 

// trying to add the shift factor to the element, returing undefined 

// managed to apply the shift element to it, but how do I return 

// the shifted str with the letters shifted not the numbers??? 

// how can I return the letter element with the shift applied? 

// when it reaches the end set a equal to 0 

// how can I ensure the str keeps looping, 

// another loop, set aA to 0 and keeping looping? nested loop? 

// I will just do the period puncuation, then write the actual test, 

// then move on. 



// let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

 // commented out below here 
// function caesarCipher(str, shift) {
//     let result = ''; 

//     let shiftFactor = shift; 
 
//     for (let i = 0; i < str.length; i++) {

//         // let baseCodeUpperCase = 65;

//         // let baseCodeLowerCase = 97;

//         let numberCharacter = str[i].charCodeAt(); 
//         console.log(numberCharacter);
//         let shiftedCharacters = (numberCharacter + shiftFactor);
 
        // I am trying to figure out the correct cipher for uppercase and lowercase letters 

        // so far I made a conditional using regex that tests for uppercase letters 

        // passing the string into the regex pattern, 

        // then subtracting the differnce between the number character and the base code 

        // then adding the base case back in. 

        // then how do I apply the shift? 

        // I don't understand why I am USING SUBTRACTION THEN ADDING THE BASE IN!!!!

        // I DONT UNDERSTAND THIS AT ALL. 

        // this conditional literally makes no sense, and I don't understand this process at all 

        // 

        // if (/[A-Z]/.test(str)) { 

        //     // console.log(str); 

        //     let upperCaseDifference = numberCharacter - baseCodeUpperCase;
          
        //      upperCaseDifference = upperCaseDifference + baseCodeUpperCase;

        //      console.log(upperCaseDifference); 

        //     //  let returnShiftedLetter = String.fromCharCode(upperCaseDifference);

        //     //  result += returnShiftedLetter;
        //      // what am I TESTINGGGGGGGG!?!?!!??!? 

        //      // to prevent wrapping 

        //      // 

        //     //  shiftedCharacters = upperCaseDifference; 

        //     //  console.log(upperCaseDifference);
        //   }


        // commented out below here 
          
//         let returnShiftedLetter = String.fromCharCode(shiftedCharacters); 

//         result += returnShiftedLetter;
//     } 
//     return result;
// }  

// console.log(caesarCipher('abc', 3));



// function caesarcipher(letter, shift) { 

//      let letterCharCode = letter.charCodeAt(); 
//      let shiftedCharCode = letter + shift; 

//     if (letterCharCode >= 65 && letterCharCode <= 90) { 
//         // if letter is uppercase, if letter is within the range of uppercase (65 <= letter <= 90)
       
//         if (shiftedCharCode > 90) { 
//             let remainder = (shiftedCharCode - 90);
//             let loopedOverCharCode = 64 + remainder;
//             let newLetter = String.fromCharCode(loopedOverCharCode); 
//             return newLetter;
//         }
//       } else if (shiftedCharCode <= 90) { 
//         let newLetter = String.fromCharCode(shiftedCharCode);
//         return newLetter;
//       } else if (letter >= 97 && letter <= 122) { 
//         let newLetter = String.fromCharCode(shiftedCharCode); 
//         return newLetter;
//       }
//     }   



function caesarcipher(letter, shift) { 

    let letterCharCode = letter.charCodeAt();
    let shiftedCharCode = letterCharCode + shift;
    
    if (letterCharCode >= 65 && letterCharCode <= 90) {  // if letter is uppercase, if letterCode is within the range of uppercase (65 <= letterCode <= 90)
        if (shiftedCharCode > 90) {
             let remainder = (shiftedCharCode - 90);
             let loopedOverCharCode = 64 + remainder;
             let newLetter = String.fromCharCode(loopedOverCharCode);
             return newLetter;
          } else if ( shiftedCharCode <= 90) {
                let newLetter = String.fromCharCode(shiftedCharCode);
                return newLetter;
             }
      } else if (letterCharCode >= 97 && letterCharCode <= 122) { // if letter is lowercase, if letter is within the range of lowercase (97 <= letter <= 122)
        //some code here
        if (shiftedCharCode > 122) { 
            let remainder = (shiftedCharCode - 122);
            let loopedOverCharCode = 96 + remainder;
            let newLetter = String.fromCharCode(loopedOverCharCode);
            return newLetter;
        } else if (shiftedCharCode < 122) { 
            let newLetter = String.fromCharCode(shiftedCharCode);
            return newLetter;
        } 
      } 
      return letter; 
    }

// not within the range, 

    console.log(caesarcipher('!', 3)); 

    module.exports = caesarcipher;


// PUNCUATION PLAN: 

// I think find the numeric number of the period 

// use the same logic to get it to loop back, to the start of the alphabet, 

// starting at 'A' because the capital letters are the closest, 

// 46 looks like the numeric number for the period, 


// you need it to start at 65 again, use the same logic as above, 


// I think use another else statement, check if the number is 

// I think I will begin to write the tests, then hopefully by that time, I will get some clarification. 

// begin writing tests for uppercase, lower case as well as a shift factor. 






// Don’t forget to test wrapping from z to a. 

// how come when I enter z it does not begin to loop back over again? 

// see if you can, loop through them again, 

// post the alphabet again, 



       // lower case
        //  if (shiftedCharacters >= 122) {
        //     shiftedCharacters = (shiftedCharacters % 122) + 96;
        //     console.log(shiftedCharacters);
        // }  
        // uppercase 

        // if (numberCharacter >= 65) { 
        //     let upperCaseDifference = numberCharacter - baseCodeUpperCase;

        //     upperCaseDifference = upperCaseDifference + baseCodeUpperCase;

        //     console.log(upperCaseDifference); 
            
        // } else if (numberCharacter >= 97) { 
        //     let lowerCaseDifference = numberCharacter - baseCodeLowerCase

        //     console.log(lowerCaseDifference);

        // } 

        // the problem is I need my conditionals to check if we have gone 

        // over the alphabet, so restart from the beginnging. 

        // take the difference of the 
        // 