/**
 * Exercise 1
 *
 * Create an object {user} and add properties "firstName" and "lastName".
 */

 const user = {
     firstName:"Bob",
     lastName:"Pussman"

 };

 /** console.log(user);

/**
 * Exercise 2
 *
 * Create an object {userRead} and add properties "books" and "newspapers".
 * Both should be arrays with strings.
 */


const userRead = {
    books:["Harry Potter","The Road"],
    newspapers:["Guardian","Mirror"]
};

/** console.log(userRead);

/**
 * Exercise 3
 *
 * extend {user} object with all properties from {userRead} object
 *
 * Note: if I modify {userRead} it shouldn't change {user} object
 *
 * Result should be:
 * user = {
 *   firstName: '',
 *   lastName: '',
 *   books: [],
 *   newspapers: []
 * }
 */

 Object.assign(user, userRead);




/**
 * Exercise 4
 *
 * Create an object {userWatch} and add properties "tvShows" and "movies".
 * Both should be arrays with strings.
 */

const userWatch = {
    tvShows: ["The Crown"],
    movies:["Inception"]
}


/**
 * Exercise 5
 *
 * extend {user} object with new property "userWatch" and assign {userWatch} object
 * as a value.
 *
 * Note: if I modify {userWatch} it should change {user} object
 *
 * Result should be:
 * user = {
 *   firstName: '',
 *   lastName: '',
 *   books: [],
 *   newspapers: [],
 *   userWatch: {
 *     tvShows: [],
 *     movies: []
 *   }
 * }
 */
 
 user["userWatch"] = userWatch;

 console.log(user);


