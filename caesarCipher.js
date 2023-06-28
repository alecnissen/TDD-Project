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

// 



let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

function caesarCipher(str, shift) {
    let result = ''; 

    let shiftFactor = shift; 

    for (let i = 0; i < str.length; i++) {

        let numberCharacter = str[i].charCodeAt(); 

        console.log(numberCharacter);

        let shiftedCharacters = (numberCharacter + shiftFactor);

        if (shiftedCharacters >= 90) { 
            shiftedCharacters = (shiftedCharacters % 90) + 64;
        } 

        else if (shiftedCharacters >= 122) {
            shiftedCharacters = (shiftedCharacters % 122) + 96;
         
        } 

        
        let returnShiftedLetter = String.fromCharCode(shiftedCharacters); 

        result += returnShiftedLetter;

    } 

    return result;
}  

console.log(caesarCipher('ZAB', 3));




// Don’t forget to test wrapping from z to a. 

// how come when I enter z it does not begin to loop back over again? 

// see if you can, loop through them again, 

// post the alphabet again, 
