// ! Generics
 
function genericTypes<T>(name:T) {
    return `Hello ${name}`
}

console.log(genericTypes('Rohit'));

// genrics with interfaces

interface keyPairs<T,U> {
    key:T,
    value:U
}

let keyPairValue:keyPairs<string,number> = {
    key:'pair',
    value:10
}
console.log(keyPairValue);

// Generics with constrants 
function getLenght<T extends {length:number}>(items:T):number {
    return items.length;
}

console.log(getLenght('HelloWorld'));
console.log(getLenght([1,2,3,4,4,5,6,6]));

// Generic Classes

class Box<T> {
    contents:T;

    constructor(value:T) {
        this.contents = value;
    }
    getContents():T {
        return this.contents;
    }

}

const numberboxes = new Box(100);
console.log(numberboxes.getContents());

const strigboxes = new Box('Coders');
console.log(strigboxes.getContents());

class stack<T> {
    private item:T[] = [];

    push(item:T):void {
        this.item.push(item);
    }
    pop():T | undefined {
        return this.item.pop();
    }
    getStack():T[] {
        return  this.item
    }
}

const numberStack = new stack<string>();
      numberStack.push('Holla');
      numberStack.push('Hello');
      numberStack.push('Namaste');
      console.log(numberStack.getStack());
      console.log(numberStack.pop());
      console.log(numberStack.pop());
      console.log(numberStack.getStack());

console.log('\n');

const stringStack = new stack<string>();
      stringStack.push('Coding is my Life');
      stringStack.push('Eat sleep code repeat');
      stringStack.push('Github, the place where i fork');
      console.log(stringStack.getStack());
      stringStack.pop()
      console.log(stringStack.getStack());






      