// calculate sum of numbers within an array 
const arr = [33, 57, -49, 12, -21];
const ex1 = []

// fucntion (arr) {
//     for (var i = 0; i 
// };


// add an element to an array
const a = ['A', 'B', 'C', 'D'];
a.push('E');
console.log(a);
// output: [ 'A', 'B', 'C', 'D', 'E' ]


// add an array to another arrray (aka, Nested Arrays)
const zz = [
    ['A', 'B'], [1, 2],
]
console.log(zz);



// using the .filter() method
const items = [
    {name: 'Bike',     price: 100},
    {name: 'TV',     price: 200},
    {name: 'Book',     price: 10},
    {name: 'Phone',     price: 1000},
    {name: 'Keys',     price: 5}
]

const filteredItems = items.filter((item) => {
return item.price <= 100
})
console.log(filteredItems); 
/* output: { name: 'Bike', price: 100 },
{ name: 'Book', price: 10 },
{ name: 'Keys', price: 5 } */ 


// .map(), will filter out specific keys like names, prices or number only in the array

// .find(), will find specific key like "Book" and returns first item in array with that key 

//.forEach(), can be items.forEach((item) => {console.log(item.price)});

// .some(), will return 
