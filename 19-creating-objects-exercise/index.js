/**
 * Exercise 1
 *
 * create an object {user}, which has
 * properties "firstName", "lastName" and "age"
 *
 * PS: use console.log() to see the result
 */


const user = {
    firstName:"Rick", lastName:"Thompson", age:33
};

console.log(user);

/**
 * Exercise 2
 *
 * create an object {allTypes} with a property of types:
 * string, number, array, object, function, boolean
 *
 * PS: use console.log() to see the result
 */

const allTypes = {
    string:"string",
    number:30,
    array:[55,66],
    object:{fname:"sophie",lname:"cappleman"},
    function:function(greet){console.log(greet)},
    boolean:true
};
console.log(allTypes);

/**
 * Exercise 3
 *
 * create a function {createMovieObject} which takes
 * name, rating and ticketPrice and returns a movie object
 * with these properties
 *
 * PS: use console.log() to see the result
 */

function createMovieObject (name,rating,ticketPrice) {
    let object = {name:name,rating:rating,ticketPrice:ticketPrice}
    return object;
}
