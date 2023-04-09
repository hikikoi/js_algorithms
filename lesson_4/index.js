function printNodeJs(arr) {
    let len = 0;
    arr.forEach(innerArr => {
      len += innerArr.length;
    });
    for (let i = 0; i < len; i++) {
      console.log('node js');
    }
  }
  const arr = [[1, 2, 3], ['a', 'b'], [4]];
  printNodeJs(arr);
  

  function funcArr(arr1, arr2, str) {
    let newarr = [...arr1, ...arr2]
    let result = []
    for (let index = 0; index < newarr.length; index++) {
        result[index] = str
    } 
    return result
  }

  console.log(funcArr([1,2,3],[,4,5,6], 'node js'));
