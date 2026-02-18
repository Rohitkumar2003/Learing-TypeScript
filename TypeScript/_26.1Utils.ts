
export function add2Numbers(a:number,b:number):number {
    return a+b;
}

export const Pi = 3.14;


export class Calculation {
    
    add(a:number,b:number):number{
        return a+b;
    }

    divide(a:number,b:number):number{
        return a/b;
    }
    
    multiply(a:number,b:number):number{
        return a*b;
    }
}


// default exports 


export default function log(msg:string):void {
        console.log(`Message:`,msg);
}