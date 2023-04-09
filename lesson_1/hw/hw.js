// with  prop

let users = [
    {name: 'John', age: 35, gender:'male'},
    {name: 'Надя', age: 14, gender:'female'},
    {name: 'Коля', age: 16, gender:'male'},
    {name: 'Ibrohim', age: 22, gender:'male'},
    {name: 'Jade', age: 22, gender:'female'},
    {name: 'Abduqodir', age: 16, gender:'male'},
    {name: 'Alisher', age: 19, gender:'male'},
    {name: 'Олег', age: 14, gender: 'male'},
    {name: 'Gulshan', age: 23, gender: 'female'},
    {name: 'Alice', age: 20, gender: 'female'}
]

function findUser(array, prop){
    for (const user of array) {
        if(user.name && user.age && user.gender === prop){
            console.log(user.name, user.age, user.gender);
        }
    }
    console.log(`User not found, try another prop. Your prop ${prop}`);
}

findUser(users, 14)

console.log('<<-------------------------------->>');


// with prop and value

function findUserWithPorop(array, prop, value){
    for (const user of array) {
        if(user[prop] === value){
            console.log(user.name, user.age, user.gender);
        }
    }
    console.log(`User not found, try another prop. Your prop: { ${prop}:${value} }`);
}

findUserWithPorop(users,'gender', 'male')

