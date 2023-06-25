// A calculator object that contains functions for the basic operations: 

// add, subtract, divide, and multiply.  

// Each of these functions should take two numbers and return the correct calculation. 

// init an object 

// each function within the object will have a function which takes two numbers and returns the answer, 

// don't forget to init a product or sum variable and add onto that then finall return, 

let calculator = { 
    add(a, b) { 
        return a + b;
    }, 

    subtract(a, b) { 
        return a - b;
    }
} 

console.log(calculator.add(1, 2));
console.log(calculator.subtract(10, 2));