/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 */

function logProperties(object) {
  for (const prop in object) {
    console.log(prop);
  }
}

/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 */

function getAllValues(object) {
  let arrayForValues = [];
  for (const property in object) {
    arrayForValues.push(object[property]);
  }
  return arrayForValues;
}

/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */


function getAllValuesAsString(object) {
    let valuesArray = [];
    for (const property in object) {
        valuesArray.push(object[property]);
    }

    return valuesArray.join(" ")
}



/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * "{key}: {value}"
 */

function propertyValueString (object) {
    for(property in object) {
        console.log (`${property}: ${object[property]}`);
    }
}
