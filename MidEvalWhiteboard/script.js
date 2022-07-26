// // Create a function that prints numbers from 1 to 100,
//  but here’s the catch, multiple of three should print 
//  “Fizz” and similarly print “Buzz” for multiples of 5 and lastly print 
//  “FizzBuzz” for multiples of three and five.

// create function 
// create for loop 
// if statement 
// checks multiples of 3 will print 'fizz'
// checking for multiples of 5 ' fizz buzz' 



    for (let i = 0; 1 <= 101; i++) {
        if (i % 3 == 0) {
            console.log('Fizz');
        } else if (i % 5 == 0) {
            console.log('FizzBuzz'); 
        } else {
            console.log(i);
        }
    }
