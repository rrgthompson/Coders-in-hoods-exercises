// install and  import "readline-sync" npm package before you do exercises
var readlineSync = require("readline-sync");

/**
 * Exercise 1
 *
 * ask user for a name and assign a response to variable {name}
 */

const name = readlineSync.question(`What is your name `);

//===== DO NOT TOUCH THIS BLOCK =====
console.log(`Hi ${name}!`);
console.log("=====================");
console.log(`Let me do math for you!`);
console.log("=====================");
//===================================

/**
 * Exercise 2
 *
 * offer user to do some math, ask to provide a math symbol and
 * offer a few options: +, -, * or /
 * Save response to {selectedSymbol} variable.
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get correct symbol
 */

let selectedSymbol;

const userMath = () => {
  selectedSymbol = readlineSync.keyInSelect(["+", "-", "*", "/"]);
  if (selectedSymbol === -1) {
      console.log("please select valid option ");
    userMath();
  }
  console.log(`Your math symbol is: `,selectedSymbol);
};

userMath();


/**
 * Exercise 3
 *
 * ask user for the first number and assign response to a variable {number1}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */


 let number1;


 const firstUserNumber = () => {
    number1 = readlineSync.question("Enter a number ");
    let number1AsInteger = parseInt(number1);
    if (!Number.isInteger(number1AsInteger)) {
        console.log(`Enter number as a digit `);
      firstUserNumber();
    }
    console.log(`Your number is ${number1}`);
  };
  
 firstUserNumber();

  console.log(typeof number1);
  console.log(number1)




 

/**
 * Exercise 4
 *
 * ask user for the second number and assign response to a variable {number2}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */

 let number2;


 const secondUserNumber = () => {
    number2 = readlineSync.question("Enter a second number ");
    let number2AsInteger = parseInt(number2);
    if (!Number.isInteger(number2AsInteger)) {
        console.log(`Enter number as a digit `);
      secondUserNumber();
    }
    console.log(`Your second number is ${number2}`);
  };
  
 secondUserNumber();

  console.log(typeof number1)
  console.log(number2)



/**
 * Exercise 5
 *
 * take numbers that user provided to you and do math based on user
 * selected symbol.
 *
 * show the result to the user
 */


/**for result  use switch*/

let result;

const calculateUserInputs = (passed) => {
    switch (passed) {
      case 0:
        return result = number1 + number2;
      case 1:
        return result = number1 - number2;
      case 2:
        return result = number1 * number2;
      case 3:
        return result = number1 / number2;
      default:
        return "Enter something else";
    }
  }

  calculateUserInputs(selectedSymbol);


console.log("=====================");
console.log(`Here you go, the result is ${result}`);


console.log(typeof result)