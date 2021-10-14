/**
 * Exercise 1
 *
 * create a function {noStrings} that takes an array
 * as a parameter and return an array but without strings
 */


const convertToPositive = (numbersArray) => {
    const result = numbersArray.map(element => {
        return Math.abs(element);
      });
      return result;
}


/**
 * Exercise 2
 *
 * create an arrow function {getAllNames} which will take
 * an array of users(objects) as parameter and return an
 * array on names
 *
 * Ex: getAllNames([
 *   {name: 'Alex', age: 26},
 *   {name: 'John', age: 25}
 * ]) will return ['Alex', 'John']
 */

const getAllNames = (namesArray) => {
    const result = namesArray.map(element => {
        return element["name"]
    });
    return result;
}

/**
 * Exercise 3
 *
 * create a function {greetAll} that takes array of names as a parameter
 * and return a new array of greetings "Hi, {name}!"
 */

const greetAll = array =>  {
   const result = array.map(element => {
         return `Hi, ${element}!`;
     });
     return result;
}


/**
 * Exercise 4
 *
 * create a function {numbersMoreThan13} that takes
 * an array as a parameter and return an array of numbers
 * that are more than 13
 */

/**
 * Exercise 5
 *
 * create a function {objectsOnly} that takes
 * an array as a parameter and return an array of objects
 */

/**
 * Exercise 6
 *
 * create a function {truthyOnly} that takes
 * an array as a parameter and return an array of truthy values.
 * IMPORTANT: You still need to keep number 0.
 */
