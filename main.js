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
// const arr = [1, 5, 2, 9, 6, 6, 5, 3, 2]
// console.log(sortByNumber(arr))
/*******************
 * YOUR CODE BELOW *
 *******************/
const d6Image = document.querySelector('#d6-roll')
d6Image.src = 'images/start/d6.png'



const doubled6Image1 = document.querySelector('#double-d6-roll-1')
doubled6Image1.src = 'images/start/d6.png'


const doubled6Image2 = document.querySelector('#double-d6-roll-2')
doubled6Image2.src = 'images/start/d6.png'


const numImage1 = document.querySelector('#d12-roll')
numImage1.src = 'images/start/d12.jpeg'


const numImage2 = document.querySelector('#d20-roll')
numImage2.src = 'images/start/d20.jpg'


d6Image.addEventListener('click', function(){
  const six =  getRandomNumber(6)
  sixes.push(six)
  d6Image.src = `images/d6/${six}.png`

  document.querySelector('#d6-rolls-mean').textContent = getMean(sixes)
 document.querySelector('#d6-rolls-median').textContent = getMedian(sixes)
 document.querySelector('#d6-rolls-mode').textContent = getMode(sixes)
})
console.log(d6Image)

doubled6Image1.addEventListener('click', function(){
  const dbl1 =  getRandomNumber(6)
  doubleSixes.push(dbl1)
 doubled6Image1.src = `images/d6/${dbl1}.png`

 document.querySelector('#double-d6-rolls-mean').textContent = getMean(doubleSixes)
 document.querySelector('#double-d6-rolls-median').textContent = getMedian(doubleSixes)
 document.querySelector('#double-d6-rolls-mode').textContent = getMode(doubleSixes)
})
console.log(doubled6Image1)

doubled6Image2.addEventListener('click', function(){
  const dbl2 =  getRandomNumber(6)
  doubleSixes.push(dbl2)
 doubled6Image2.src = `images/d6/${dbl2}.png`

 document.querySelector('#double-d6-rolls-mean').textContent = getMean(doubleSixes)
 document.querySelector('#double-d6-rolls-median').textContent = getMedian(doubleSixes)
 document.querySelector('#double-d6-rolls-mode').textContent = getMode(doubleSixes)
})
console.log(doubled6Image2)

numImage1.addEventListener('click', function(){
  const twelve =  getRandomNumber(12)
  twelves.push(twelve)
 numImage1.src = `images/numbers/${twelve}.png`

 document.querySelector('#d12-rolls-mean').textContent = getMean(twelves)
 document.querySelector('#d12-rolls-median').textContent = getMedian(twelves)
 document.querySelector('#d12-rolls-mode').textContent = getMode(twelves)
})
console.log(numImage1)

numImage2.addEventListener('click', function(){
  const twenty =  getRandomNumber(20)
  twenties.push(twenty)
 numImage2.src = `images/numbers/${twenty}.png`

  document.querySelector('#d20-rolls-mean').textContent = getMean(twenties)
 document.querySelector('#d20-rolls-median').textContent = getMedian(twenties)
 document.querySelector('#d20-rolls-mode').textContent = getMode(twenties)
})
console.log(numImage2)








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
const resetBtn = document.querySelector('#reset-button')

const originalImages = {
d6Image: 'images/start/d6.png',
doubled6Image1: 'images/start/d6.png',
doubled6Image2: 'images/start/d6.png',
numImage1: 'images/start/d12.jpeg',
numImage2: 'images/start/d20.jpg',
}


resetBtn.addEventListener('click', function()  {
  d6Image.src = originalImages.doubled6Image1
  doubled6Image1.src = originalImages.doubled6Image1
  doubled6Image2.src = originalImages.doubled6Image2
  numImage1.src = originalImages.numImage1
  numImage2.src = originalImages.numImage2

  sixes.length = 0
  doubleSixes.length =0
  twelves.length = 0 
  twenties.length = 0

  document.querySelector('#d6-rolls-mean').textContent = 'NA'
  document.querySelector('#d6-rolls-median').textContent = 'NA'
  document.querySelector('#d6-rolls-mode').textContent = 'NA'

  document.querySelector('#double-d6-rolls-mean').textContent = 'NA'
  document.querySelector('#double-d6-rolls-median').textContent = 'NA'
  document.querySelector('#double-d6-rolls-mode').textContent = 'NA'

  document.querySelector('#d12-rolls-mean').textContent = 'NA'
  document.querySelector('#d12-rolls-median').textContent = 'NA'
  document.querySelector('#d12-rolls-mode').textContent = 'NA'

  document.querySelector('#d20-rolls-mean').textContent = 'NA'
  document.querySelector('#d20-rolls-median').textContent = 'NA'
  document.querySelector('#d20-rolls-mode').textContent = 'NA'

})
resetBtn.click()
/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
function getMean(arr){
  if(arr.length === 0) return 'NA'
  let sum = 0
  for(let num of arr){
    sum += num
  }
  return sum / arr.length
}
console.log(getMean([1, 2, 3]))

function getMedian(arr){
  if(arr.length === 0) return 'NA'

  const sorted = sortByNumber(arr)
  const midIndex = Math.floor(sorted.length / 2)

  if(sorted.length % 2 !== 0){
    return sorted[midIndex]
  } else {
    return (sorted[midIndex - 1] + sorted[midIndex]) / 2
  }
}
console.log(getMedian([1, 2, 3]))

// function getMode(arr){
//   if(arr.length === 0) return 'NA'

//   const frequency = {}
//   let maxFreq = 0
//   let mode = []
   
//   for(let num of arr){
//     frequency[num] = (frequency[num] || 0) + 1
//     if(frequency[num] > maxFreq) {
//       maxFreq = frequency[num]
//     }
//   }

//   for(let num in frequency){
//     if(frequency[num] === maxFreq){
//       mode.push(Number(num))
//     }
//   }
//   return mode.length === Object.keys(frequency).length ? 'NA' : mode.join(', ')
// }


function getMode(arr){
  const hash = {}
  for(let num of arr){
    console.log(hash[num])
    if(hash[num] === undefined){
      hash[num] = 1
    }else{
      hash[num] ++
    }
    
  }
  // look for the biggest number, return the key of that count
  //{
  //  1: 20,
  //  2: 14,
  //  3: 22,
  //  4: 18,
  //  5: 10,
  //  6: 12,
  //}

  let biggest = 0
  for(let key in hash){
    // how to access the value we're on?
    if(hash[key] > biggest){
      biggest = hash[key]
    }
  } 
  for(let key in hash){
    if(hash[key] === biggest){
      return key
    }
  }
}
getMode([1, 2, 2, 3])