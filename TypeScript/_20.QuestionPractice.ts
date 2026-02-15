
//! 1. Create a Bank Account Class: Write a bankAccount class with the following properties:

    //! accountNumber:Number
    //! balance:number (Private)
    //! The Class should have methods 

    //! deposit (amount:number) void -> (to add to balance)
    //! widrawl (amount:number) void -> (to subtract from balance)
    //! getBalance():string -> (to return current balance)

    class bankAccount {
        private balance:number;

        constructor(public accountNumber:string, initialBalance:number) {
                this.balance=initialBalance;
        } 
            deposit(amount:number):void {
                `Your Deposit Ammount:${this.balance+=amount}`;
            }
            widrawl(amount:number):string {
              if(amount > this.balance) throw new Error('Insufficient Balance...')
              return `Your Widrawl Ammount:${this.balance-=amount}`;
            }
            getBalance():string {
                return `Your Current Balance:${this.balance}`;
            }
    }

    const myAccount = new bankAccount('43F3242434T34TU53',1000);
        myAccount.deposit(500);
        myAccount.widrawl(200);
        myAccount.deposit(600);

        // console.log(myAccount.widrawl(300));

//! 2. Create an Employee class with inheritance :
//! Define a Employee class with properties name and salary
//! Create a subclass Manager that adds a department properties
//! Both classes should have a getDetails methods that returns a string with the employes details

      
class Employee {
    constructor(public name:string, public salary:number) {}

    getDetails():string {
        return `Employee Details ${this.name}, Salary:${this.salary}`
    }
}

class Manager extends Employee {
    constructor(name:string,salary:number, public Departmen:string) {
        super(name,salary);
    }
    getDetails(): string {
        return `Manager Details:${this.name}, salary:${this.salary},Department:${this.Departmen}`
    }
}
const emp = new Employee('Rohit Kumar',50000);
const mgr = new Manager('John',60000,'IT');

console.log(emp.getDetails());
console.log(mgr.getDetails());

