// Modular

function getModular(num, mod) {
    return num - (Math.floor(num / mod) * mod);
  }  

  console.log(getModular(29, 5))

//   devisor

  function divide(dividend, divisor) {
    let quotient = 0;
    while (dividend >= divisor) {
        quotient++;
        dividend -= divisor;
    }
    return quotient;
   }
   console.log(divide(16, 4)); 
   
//    array

   let myArray = [1, 2, 3, 4, 5];
   
// some method
function mySome(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return true;
      }
    }
    return false;
  }

  let hasEven = mySome(myArray, function(element) {
    return element % 2 === 0;
  });
  console.log(hasEven);
  
  // every method
  function myEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (!callback(array[i], i, array)) {
        return false;
      }
    }
    return true;
  }

  let allEven = myEvery(myArray, function(element) {
    return element % 2 === 0;
  });
  console.log(allEven);
  
  // reduce method
  function myReduce(array, callback, initialValue) {
    let accumulator = initialValue ? initialValue : array[0];
    let startIndex = initialValue ? 0 : 1;
    for (let i = startIndex; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
  }
  
  let sum = myReduce(myArray, function(accumulator, element) {
    return accumulator + element;
  }, 0);
  console.log(sum);



  