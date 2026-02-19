

//! Class Decorator 

const Logger = (constructor:Function) => {
    console.log(`Creation of Logger:${constructor.name}`);
}

@Logger 
class Peoples {
    constructor(public name:string){ 

    }
}

const p1 = new Peoples('Rohit')
// console.log(p1);


// Method or Funciton Decorator

function LogMethod(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function(...args:any[]) {
            console.log(`Method Called:`,propertyKey);
            return originalMethod.apply(this, args);
        }
}
class Calop {
        @LogMethod
        getAddResponseDFetchingData(a:number,b:number):number {
            return a+b;
        }
     }

const c1 = new Calop();
console.log(c1.getAddResponseDFetchingData(5,4));

// Accessor & property decorator 

function ReadOnly( target:any, PropertyKey:string ) {
   Object.defineProperty(target,PropertyKey,{
    writable:false
   } )
}

class Cars {
    // @ReadOnly  
   private _brand:string = 'Tesla'

   
   get brand() {
       return this._brand;
   }
   @ReadOnly
   set brand(value:string) {
        this._brand = value;
   }
}

const myCars = new Cars();
        myCars.brand = 'Mercidies';
console.log(myCars.brand);

// Class Params 

function LogParameter(target: Object, propertyKey: string , parameterIndex:number) {
    console.log(`Parameter in Method ${propertyKey} at index:${parameterIndex}`);
}

class UserParams {
    crateUser(
           @LogParameter name:string, 
           @LogParameter age:number) {
        console.log(`User Name:${name}, User Age:${age}`);
    }
}

const userparam = new UserParams();
      userparam.crateUser('John Doe',25);
      console.log();



// Practice Problems : Create a method decorator that log the time taken for the execution of a method 
const LogExecutionTime = (target:any, propertykey:string, descriptor:PropertyDescriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function(...args: any[]) {
            const start = performance.now();
            const result = originalMethod.apply(this,args);
            const end = performance.now();
            console.log(`Execution Time for: ${propertykey}:${end-start} /ms`);
            return result;
        }
}

class MathOperation {
    @LogExecutionTime
    multiply(a:number, b:number):number {
        return a*b;
    }
}
const mathOps = new MathOperation();
console.log(mathOps.multiply(4,6));
