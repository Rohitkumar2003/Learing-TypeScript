
//! 1. Write a TypeScript function to calculate the factorial of a number with proper type anotation 

const factorialOfN = (n:number):number => {
    if(n===0 || n===1) return 1;
    return n*factorialOfN(n-1);
}

// const fact = factorialOfN(8);

// console.log(`Fact of 8:`,fact);

//! 2. Define a function that accepts a user object (with name,age,and email) and return a formatting string 

interface Car {
    CarOwnerName:string
    CarModel:number | string,
    CarColor:string,
    CarPrice:number,
}

function userCar(car:Car):string {
    return `
            Car Owner Name : ${car.CarOwnerName}
            Car Model Number: ${car.CarModel}
            Car Color: ${car.CarColor}
            Car Prize:${car.CarPrice}
            `
}

const car:Car = { 
    CarOwnerName:'Rohit Kumar',
    CarModel:'DL10CR75R',
    CarColor:'Gray',
    CarPrice:470000
}

// console.log(userCar(car));

//! 3 . Calculate Total Price : Write a function thatobject calculates the total price of an array of product objects. Each product has a price and quantity

interface Product {
    price:number;
    quantity:number;
}

const calculate = (products:Product[]):number => {
    return products.reduce((total,product)=>{
        return total+product.price*product.quantity;
    },0)
}

const cart:Product[] = [
    {price:100,quantity:3,},
    {price:200,quantity:5,},
    {price:300,quantity:10},
]

console.log(`Total Price:`, calculate(cart));


//! 4. Define a Union for a Vechile that can either be a Car or a Bike with diffrent Properties. Write a function to log the details based on the vechile type

type carData = {
    type: 'car';
    make:string;
    model:string;
    year:number;
}

type bikeData = {
    type: 'bike';
    brand:string;
    cc:number;
}

type VechileData = bikeData | carData;

function getVechilesDetails(vechile:VechileData) {
    if(vechile.type === 'car') {
        console.log(`Car: ${vechile.make},${vechile.model},Year(${vechile.year})`);
    }else if(vechile.type === 'bike') {
        console.log(`Bike: ${vechile.brand}, CC: ${vechile.cc}`);
    }
}

let myCar :VechileData = {
    type:'car', make:'Tesla',model:'Bu0xx',year:2021,
}

let myBike:VechileData = {
    type:'bike',
    brand:'Ducati',
    cc:400,
}

getVechilesDetails(myCar);
getVechilesDetails(myBike);