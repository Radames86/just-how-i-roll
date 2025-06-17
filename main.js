/**********
 * DATA *
 **********/

const sixes = []; // these arrays represent our data base
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

// example
console.log(getRandomNumber(6))
///////////////////////////////////////////////

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

// example
const arr = [1, 5, 2, 9, 6, 6, 5, 3, 2]
console.log(sortByNumber(arr))
/*******************
 * YOUR CODE BELOW *
 *******************/
const d6Image = document.querySelector('#d6-roll')
d6Image.src = 'images/start/d6.png'
const random = 5
d6Image.src = `images/d6/${random}.png`

const doubled6Image1 = document.querySelector('#double-d6-roll-1')
d6Image.src = 'images/start/d6.png'
const random1 = 6
doubled6Image1.src = `images/d6/${random1}.png`

const doubled6Image2 = document.querySelector('#double-d6-roll-2')
d6Image.src = 'images/start/d6.png'
const random2 = 5
doubled6Image2.src = `images/d6/${random2}.png`


//example
// const firstName = 'Radames'
// const lastName = 'Rivera'
// console.log(`${firstName} ${lastName} is here`)

// The 4 To Do list for each section:
// click listener
// finding a random number/numbers
// add the number to database (array at top)
// change the image to reflect the number/numbers
/*******************
 * EVENT LISTENERS *
 *******************/





/******************
 * RESET FUNCTION *
 ******************/
// clear out the data from the arrays
// reset the starting images


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
