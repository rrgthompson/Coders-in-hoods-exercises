let step = 0;
let counter = 0;
const stepForm = document.querySelector('.step_form')
const stepValue = document.querySelector('.step_value')
const counterValue = document.querySelector('.counter_value')
const decrementBtn = document.querySelector('#decrement')
const incrementBtn = document.querySelector('#increment')

const autoDecrement = document.querySelector('#auto_decrement')
const autoIncrement = document.querySelector('#auto_increment')
const stopAuto = document.querySelector('#stop_auto')
let interval;

/**
 * Exercise 1
 *
 * create a function {action} which will take a {symbol} param: "+" or "-".
 * increment {counter} by {step} if you pass "+", or
 * decrement {counter} by {step} if you pass "-"
 *
 * NOTE: ".counter_value" should always represent the current value of {counter}
 */


const action = (symbol) => {
if (symbol === `+`) counter += step;
if (symbol === `-`) counter -= step;

counterValue.innerText = counter;
}
/**
 * Exercise 2
 *
 * When the user clicks on "Set step" button, you need to:
 * 1. set {step} to the current value of input.
 * 2. reset value of input field to 1
 * 3. update value of ".step_value" to value of {step}
 *
 * NOTE: {step} should be an integer
 *
 */


stepForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = event.target.querySelector('input');
    step = parseInt(input.value);
    input.value = 1;
    stepValue.innerText = step;
});



/**
 * Exercise 3
 *
 * handle click on "#decrement" button and
 * decrement counter by {step}
 *
 * NOTE: remember to use your {action} function
 */

 decrementBtn.addEventListener('click', () => action('-'));

/**
 * Exercise 4
 *
 * handle click on "#increment" button and
 * increment counter by {step}
 *
 * NOTE: remember to use your {action} function
 */

 incrementBtn.addEventListener('click', () => action('+'));

/**
 * Exercise 5
 *
 * when the user clicks on "#auto_decrement",
 * {counter} should be decremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */


autoDecrement.addEventListener('click', () => {
    clearInterval(interval);

    interval = setInterval(() => {
        action('-');
    }, 1000);
});
/**
 * Exercise 6
 *
 * when the user clicks on "#auto_increment",
 * {counter} should be incremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */

 autoIncrement.addEventListener('click', () => {
    clearInterval(interval);
   interval = setInterval(() => {
        action('+');
    }, 1000);
});

/**
 * Exercise 7
 *
 * when the user clicks on "#stop_auto",
 * the auto counter should stop
 */

 stopAuto.addEventListener('click', () => clearInterval(interval));