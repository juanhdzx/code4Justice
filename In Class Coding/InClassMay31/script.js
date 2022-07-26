// const ages = [20, 40, 10, 11, 50, 100, 9 ,23, 51, 1, 25, 15, 18, 22, 27, 7, 8];
// const age21 = []
// for( let i = 0; i < ages.length; i++){
//     if (ages[i] >= 21); {

//     age21.push(ages[i]);
//     }
// }
// console.log(age21);

function sum (num1, num2) {
    return num1 + num2
}
function multiplySums(x, y, callback) {
    return callback(x, y) * callback(x, y)
}
console.log(multiplySums(3, 4, sum));