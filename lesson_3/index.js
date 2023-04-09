// function factorial(n) {
//     if (n == 1) return 1
//     else return n * factorial(n-1);
// }
// console.log(factorial(5));

function separateObject(obj) {
    let keys = [];
    let values = [];
  
    for (let key in obj) {
      keys.push(key);
      values.push(obj[key]);
    }
    let result = {
      'keys': keys,
      'values': values
    };
    return result;
  }

  let myObject = { 'a': 1, 'b': 2, 'c': 3 };
  console.log(separateObject(myObject));