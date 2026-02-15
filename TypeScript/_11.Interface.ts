
interface Person {
    name:string,
    age:number,
    isMarried:boolean,
    greet():void 
}

let person:Person = {
    name:'John',age:23,isMarried:false,
    greet() {
        console.log(`Hey`);
    }
}

// person.greet();
interface mathFunction {
    (valueA:number, valueB:number): number;
}

const addFunction : mathFunction = (a,b) =>  a+b;
const subFunction : mathFunction = (a,b) =>  a-b; 


console.log(`Add Function Value is: `, addFunction(20,30));
console.log(`Subtract Function Value is : `, subFunction(50,20));


// Type alias 


// type AliasName = TypeDefintion

type UserId = string;

let userId:UserId = 'jarvis.rohit1001';
console.log('User Id: ', userId);

// type Alias with Objects 
 
type User =  {
    name:string, 
    age:number
};

let person1 :User = {
    name:'John', 
    age:23,
}

console.log(person1.name);


type ID = string | number;
let userId1 : ID = 'xty3we8';
let productId:ID = 132;

console.log('User Id: ', userId1);
console.log('product Id:', productId);

// Interfaces Vs type Alias 

interface Users1 {
    name:string,
    MobileNumber:number,
}

interface Customer  extends Users1 {
    address:string, 
}

let myCustomer : Customer = {
    name:'Smith',
    MobileNumber:897239847,
    address:'Los Santos'
}

type Vechiles = {
    maker:string,
    modelNumber:string,
}

// type Car = Vechiles & {
//     type:string,
//     ModelNo:string,
//     Color:string,
//     CarOwnerName:string,
//     isElectric:boolean,
//     CarOwnerMobileNumber:number
// }

// let MyCar : Car = {
//     maker:'BMW',
//     type:'Diesel',
//     Color:'Blue',
//     modelNumber:'DL10CRY23',
//     isElectric:false,  
//     CarOwnerMobileNumber:9888832832,
// }

type MathOperation1 = (a:number, b:number) => number;
let add: mathFunction = (x,y) =>{
     return x+y
}
let sub: mathFunction = (x,y) => {
    return x-y;
}
console.log(add(2,4));
console.log(sub(5,2));


type status = 'active' | 'inactive' | 'pending';
let userStatus : status = 'active';
console.log(userStatus);

type Tree = { 
    val:string, children:Tree[],
}

let tree:Tree = {
    val:'root',
    children:[
        {
            val:'child1',
            children:[
                {
                    val:'child2',
                    children:[]
                }
            ]
        }
    ]
}

console.log(tree);


// intersecting type
 let config: {server:string, PORT:number} & {secure:boolean, timeout:number} = {
    server:'localhost',PORT:8080, secure:true,timeout:5000, 
 }

 console.log(config);


