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

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function caesarCipher(str, shift) {
    let result = ''; 

    let shiftFactor = shift; 

    // console.log(shiftFactor);


    for (let i = 0; i < str.length; i++) { 

        let letter = str[i];

        console.log(letter);

        console.log(letter.charCodeAt());

        let numberCharacter = str[i].charCodeAt();

        let shiftedCharacters = numberCharacter = numberCharacter + shiftFactor; 

        console.log(shiftedCharacters); 

    }
}  

console.log(caesarCipher('abc', 3));

