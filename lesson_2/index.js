function toObj(str) {
    const result = {}
    for(char of str){
        if(!result[char]){
            result[char] = 1
        } else{
            result[char] += 1
        }
    }
    return result
}

console.log(toObj('asdsdadadddd'));

function lengthChecker(word) {
    if(word.length > 10){
        return word.toUpperCase()
    }else{
        return word.toLowerCase()
    }
}

console.log(lengthChecker('Hello Jonh')); 


function firstTwo(word) {
    return word.slice(0, 2)
}

console.log(firstTwo('Hello'));
