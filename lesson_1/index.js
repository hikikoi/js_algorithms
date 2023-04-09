// let array = [ 13441,2112,22,2345,233,82,322,32,42,524 ];

// function sumToSmallestNumbers(numbers) {
//     let ssr = numbers.sort((a,b) => a- b).slice(0, 2).reduce((a,b) => a + b);
//     console.log(ssr);
// }

// sumToSmallestNumbers(array);

function squereSum(numbers) {
    let mas = [];
    for(let i = 0; i < numbers.length; i++){
        let num = numbers[i] * numbers[i];
        mas.push(num)
    }
    let sum = mas.reduce((a,b) => a + b);
    console.log(sum);
}

squereSum([2, 4]);
squereSum([3,4,5])