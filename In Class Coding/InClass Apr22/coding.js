// Question 1 

// const cars = ["Nissan", "Toyota", "Honda"];
// let car = cars [0, 1, 2]; // array of numbers 

// //boolean 
// var myCar = [];
// var value = 2;
// for (var i = 0; i < value; i++) {
//     myCar.push(false);
// }
// alert(myCar);


// Question 2

x = typeCar (1, 2, 3, 4);

function typeCar () {
    let car = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > car) {
            car = arguments[i];
        }
    }
    return car;

}