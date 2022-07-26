// If the user wants, they can enter their name in between the quotation marks.
let userName = 'Juan';

//value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball.
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion = 'What is my lucky number?'
console.log(userQuestion);

//generate a random number between 0 and 7. In this case, I am using the Math.floor method to randomize a number between 0-8
var randomeNumber = Math.floor(Math.random()* 8); // without the "* 8" the method will only show a number between 0-1.

// results to what the 8Ball will show the user, in this case, I used a switch statement
let eightBall = 8;
  switch(eightBall) {
    case 0 :
    console.log('It is certain');
    break;
    case 1 :
    console.log('It is decidedly so');
    break;
    case 2 :
    console.log('Reply hazy try again');
    break;
    case 3 : 
    console.log('Cannot Predict now');
    break;
    case 4 : 
    console.log('Do not count on it');
    break; 
    case 5 : 
    console.log('My sources say no');
    break;
    case 6 : 
    console.log('Outlook not so good');
    break;
    case 7 : 
    console.log('Signs point to yes');
    break;
    case 8 : 
    console.log('YESSIRR');
    break;
    default: 
    console.log('Try again!');
  }


 