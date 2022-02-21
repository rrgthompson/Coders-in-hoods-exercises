const addCounterEl = document.querySelector("#new_timer");
const timersContainerEl = document.querySelector(".timers");

// USE THIS VARIABLE TO COUNT TIMERS
let timersCount = 0;



/** Deliverables

1. As a user I should be able to add a new timer to the DOM by clicking on "Add Timer".
2. A timer should continuously count up and always show seconds and the first two integers of milliseconds
3. When I click "Reset", that timer should return to 0.
4. When I click "Stop", it should stop that timer.
5. When I click "X", the timer should stop and be removed from the DOM
6. I should be able to add NO MORE than 5 timers.
*/


/**@param {## Timer HTML Structure

```html
<div class="timer timer_1">
  <div class="remove"></div>
  <h3>0 <span>00</span></h3>
  <div class="btn">
    <button class="reset">Reset</button>
    <button class="stop">Stop</button>
  </div>
</div>
```
 */

/**
 * Exercise 1
 *
 * create a function {createTimerEl} which takes a number
 * and creates a div which matches the HTML structure you can find
 * in the README
 *
 * NOTE: each timer should have additional class with unique number(as you
 * can see in example - timer_$)
 */

const createTimerEl = (number) => {
  const containerDiv = document.createElement(`div`);
  containerDiv.className = `${number}`;
  return containerDiv;
}

