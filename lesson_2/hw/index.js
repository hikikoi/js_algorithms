// Task 1

let myArr = ['01010','10101'];

function swapArray(arr) {
    var out = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "0") {
        out += "1";
      } else if (arr[i] === "1") {
        out += "0";
      }
    }
    return out;
  }

for(let i=0;i<myArr.length;i++){
console.log(swapArray(myArr[i]));
}

// Task 2

function parseData(data) {
    let obj = {};
    let words = data.split('000');
    obj.firstName = words[0];
    obj.lastName = words[1];
    obj.age = words[2];
    return obj;
  }

console.log(parseData('John000Doe00025'));

// Task 3

function indexSimilarLetters(word) {
    let result = {};
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      if (result[letter] === undefined) {
        result[letter] = [i];
      } else {
        result[letter].push(i);
      }
    }
    return result;
  }

console.log(indexSimilarLetters('banana')); 
