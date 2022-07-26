// for (let i = 0; 1 > 10; i++) {
//     console.log('does this work');
// }

// let num = 999
// function numberToString(num){
//     return num.toString()
// };
// console.log(num);



// for loops
// for ([intialization]; [condition]; [final expression]) {}

var ourArray = [];
for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}
console.log(ourArray);




// reverse loop
const items = ['apricot', 'banana', 'cherry'];
 
for (let i = items.length - 1; i >= 0; i -= 1) {
  console.log(`${i}. ${items[i]}`);
}


// reverse a string 

function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}
reverseString('hello');