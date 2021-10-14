// install and  import "readline-sync" npm package before you do exercises

const readlineSync = require("readline-sync");
const chalk = require("chalk");
const questionColor = message => chalk.cyanBright.bold(message);
const answerColor = message => chalk.magentaBright.bold(message);

let selectedItems = {
  book: "",
  movie: "",
  nextTrip: "",
};

const movies = [
  "The Invisible Man",
  "Never Rarely Sometimes Always",
  "Gretel & Hansel",
  "No time to die",
  "Bloodshot",
  "Onward",
  "Sonic",
];

const books = [
  "My Dark Vanessa",
  "Uncanny Valley",
  "Weather",
  "The night watchman",
  "All adults here",
  "Dear Edward",
  "Grown ups",
];

const countries = [
  "Italy",
  "France",
  "Germany",
  "Spain",
  "Portugal",
  "Denmark",
  "Netherland",
];

/**
 * Exercise 1
 *
 * create a sub menu "Books" where you need to render a list of {books}.
 * User should be able to select one. On selection store the response
 * to {user.book}.
 *
 * NOTE: You need to add option to go back, to main menu
 */

let selectedBookIndex;

const chooseBook = () => {
  selectedBookIndex = readlineSync.keyInSelect(
    books,
    "Which book would you like to read?"
  );
  selectedItems.book = books[selectedBookIndex];
  if (selectedBookIndex === -1) {
    console.log("Go back");
    chooseBook();
  }
  console.log(`You will read ${selectedBookIndex}`);
};

chooseBook();
console.log(`SELECTED BOOK IS`,selectedItems.book);


/**
 * Exercise 2
 *
 * create a sub menu "Movies" where you need to render a list of {movies}.
 * User should be able to select one. On selection store the response
 * to {user.movie}.
 *
 * NOTE: You need to add option to "go back", to main menu
 */

 let selectedMovieIndex;

 const chooseMovie = () => {
   selectedMovieIndex = readlineSync.keyInSelect(
	 movies,
	 "Which movie would you like to watch?"
   );
   selectedItems.movie = movies[selectedMovieIndex];
   if (selectedMovieIndex === -1) {
	 console.log("Go back");
	 chooseMovie();
   }
   console.log(`You will watch ${selectedMovieIndex}`);
 };
 
 chooseMovie();
 console.log(`SELECTED Movie IS`,selectedItems.movie);

/**
 * Exercise 3
 *
 * create a sub menu "Next destination" where you need to render a list
 * of {countries}. User should be able to select one. On selection store
 * the response to {user.nextTrip}.
 *
 * NOTE: You need to add option to go back, to main menu
 */

 let selectedCountryIndex;

 const chooseCountry = () => {
   selectedCountryIndex = readlineSync.keyInSelect(
	 countries,
	 "Which country would you like to visit?"
   );
   selectedItems.nextTrip = countries[selectedCountryIndex];
   if (selectedCountryIndex === -1) {
	 console.log("Go back");
	 chooseCountry();
   }
   console.log(`You will visit ${selectedCountryIndex}`);
 };
 
 chooseCountry();
 console.log(`SELECTED country IS`,selectedItems.nextTrip);


/**
 * Exercise 4
 *
 * create a top menu with categories: "Books", "Movies", "Next destination"
 * so user can pick one. User also should have the option "Exit".
 * When the user pick "Exit", log selected items.
 */


 const menuSelected = readlineSync.keyInSelect(
    ["Books", "Movies", "Next Destination"],
    questionColor("Please choose a category: "),
    {
      cancel: "Exit"
    }
  );
  switch (menuSelected) {
    case 0:
      chooseBook();
      break;
    case 1:
      chooseMovie();
      break;
    case 2:
      chooseCountry();
      break;
    default:
    };
  

  menuSelected();