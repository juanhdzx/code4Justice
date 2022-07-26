/* create a function that will return an integer number 
corresponding to the amount of digits in the given integer 
number. */

// ex:  numOfDigits(14)  -> 2
// ex:  numOfDigits(1456810) -> 7 

// function numOfDigits (number) {
//     length = String(number).length;
//     return length
// }
// console.log(numOfDigits(1456810));






// create a function
// set parameters as an array
// create empty array and name it exArr
// use if statement to log 'c10' if 7 is in the array 
// if else, log 'there isnt a #7in array
// return and push value to empty array 
//console.log

// let exArr = [882,66, 3 , 4, 7]

// function codePrac (exArr) {
// if(  exArr.includes(7)){
//     console.log('Hell nawwww');
// }else {
//     console.log('C10 is Awesome!');
// }
// return exArr;
// }
// console.log(codePrac(exArr));





// Create a function that takes in an array of 
// numbers and returns the sum of its cubes.


// create a function 
// set array as parameters
// create an empty array 
//  create a for loop to iterate thru array (parameter)
//  the loop will check for largest number 
// push those vvalues to new array 
// return vlue 
// console.log

// let x = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]
// function largestOfFour(arr) {
//     let largestArr = [];
//     const sortNum = (a, b) => b - a;
//     for (let i = 0; i < arr.length; i++) {
//         largestArr.push(arr[i].sort(sortNum)[0]);
//     }
//     return largestArr;
// }


// const marks = [80, 80, 50];

// function calculateGrade(marks) {
//     let sum = 0;
//     for (let mark of marks) 
//     sum += mark;
//     let average = sum /marks.length;

//     if ( average < 60){
//         return 'F';
//     } else if {
//         (average < 70){
//             return 'D';
//     } else if {
//         (average < 80);
//         return 'C'
//     } else if {
//         (average < 90);
//         return 'B';
//     } else {
//         return 'A';
//     }

//     console.log(calculateGrade(marks);


// const findMonth = prompt('Enter a number:');

// if (findMonth == 1) {
//     console.log('January');
// } else if (findMonth == 2) {
//     console.log('February');
// } else if (findMonth == 3) {
//     console.log('March');
// } else if (findMonth == 4) {
//     console.log('April');
// } else if (findMonth == 5) {
//     console.log('May');
// } else {
//     console.log('Invalid number')
// }


// 8. Write a JavaScript program to create a Clock.
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"

// function 
// 

// function my_Clock() 
//   {
//   this.cur_date = new Date();
//   this.hours = this.cur_date.getHours();
//   this.minutes = this.cur_date.getMinutes();
//   this.seconds = this.cur_date.getSeconds();
//   }
// my_Clock.prototype.run = function ()
//   {
//   setInterval(this.update.bind(this), 1000);
//   };
// my_Clock.prototype.update = function () 
//   {
//   this.updateTime(1);
//   console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
//   };
// my_Clock.prototype.updateTime = function (secs) 
//   {
//   this.seconds+= secs;
//  if (this.seconds >= 60)
//   {
//   this.minutes++;
//   this.seconds= 0;
//   }
//  if (this.minutes >= 60)
//   {
//   this.hours++;
//   this.minutes=0;
//   }
// if (this.hours >= 24)
//   {
//   this.hours = 0;
//   }
// };
// var clock = new my_Clock();
//   clock.run();






// // .Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, 
// it will check if the current number is odd or even, 
// and display a message to the screen.
// Sample Output:
// "0 is even"
// "1 is odd"
// "2 is even"





//_________________________________________________________________________

// create a for loop 
// then an if statement 
// if condition i % 2 == 0 , check even 
// otherwise odd
// console .log 

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + '' + 'is even');
    } else {
        console.log(i + '' + 'is odd');
    }
}


let apple = (4**2);
console.log(apple);