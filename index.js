// console.log('mondaytest');

// Get all the red cars in the given array.
// Get the unique car and get their index.

let cars = [
    {
        "color": "purple",
        "type": "Volkswagen",
        "capacity": 7
    },
    {
        "color": "red",
        "type": "station wagon",
        "capacity": 5
    },
    {
        "color": "white",
        "type": "minivan",
        "capacity": 8
    },
    {
        "color": "red",
        "type": "cabrio",
        "capacity": 2
    },
    {
        "color": "blue",
        "type": "cabrio",
        "capacity": 4
    },
    {
        "color": "green",
        "type": "minivan",
        "capacity": 6
    },
]


// Part - 1. -> Get all the red cars in the given array.

let filterAllCars = cars.filter(item => {
    return item.color === "red"
});

console.log(filterAllCars);     // filterAllCars ...

// Output:
// 0: {color: 'red', type: 'station wagon', capacity: 5}
// 1: {color: 'red', type: 'cabrio', capacity: 2}


// Part - 2. -> Get the unique car and get their index.

let uniqueCars = cars.filter(item => {
    return item.color === "red"
});

const carsIndex = uniqueCars.map(car => {

    return cars.indexOf(car);
});

console.log(uniqueCars);     //  unique cars... Output:

// Output:
// 0: {color: 'red', type: 'station wagon', capacity: 5}
// 1: {color: 'red', type: 'cabrio', capacity: 2}


console.log(carsIndex);         //  unique cars index...  

// Output: [1, 3]



const uniq = cars.filter((car2, index) => { 
    return ( cars.findIndex((a) => a.color === car2.color) === index ); }); 

console.log(uniq);    // unique cars

// output ->
// 0: {color: 'purple', type: 'Volkswagen', capacity: 7}
// 1: {color: 'red', type: 'station wagon', capacity: 5}
// 2: {color: 'white', type: 'minivan', capacity: 8}
// 3: {color: 'blue', type: 'cabrio', capacity: 4}
// 4: {color: 'green', type: 'minivan', capacity: 6}
  