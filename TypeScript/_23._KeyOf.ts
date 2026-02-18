
interface Person {
    name:string;
    age:number;
    email:string;
}

type PersonKey = keyof Person;
let keys:PersonKey = 'name';
