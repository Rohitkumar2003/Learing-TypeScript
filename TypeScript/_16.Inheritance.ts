
// ! Inheritance

class Animal {   // Parent Class 
    constructor(public name:string) {
    
    }

    makeSound():void {
        console.log('Some generic Sound...');    
    }
}

class Dog extends Animal {  // Child Class 
    constructor(name:string) {
        super(name)
    }
    makeSound(): void {
        console.log('bhow! bhow!');
    }
}

const dog = new Dog('Tommy');
dog.makeSound()