
// ! Abstract Class
abstract class Shape {
    abstract getArea():number;

    printArea():void{
        console.log(`The area is ${this.getArea()}`);
    }
}

class Rectangle extends Shape {
        constructor(private width:number, private hieght:number) {
            super();
        }
        getArea(): number {
            return this.width * this.hieght;
        }
}

const rect = new Rectangle(5,10);
rect.printArea(); 