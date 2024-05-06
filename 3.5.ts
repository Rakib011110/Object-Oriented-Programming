/*  



### Access Modifiers:

#### বর্ণনা:
Access Modifiers হল ক্লাসের প্রোপার্টি বা মেথডের এক্সেস পরিধি নির্ধারণ করা। TypeScript-এ তিনটি এক্সেস মোডিফায়ার আছে: public, private, এবং protected।

#### Interview Questions:
1. What are access modifiers in TypeScript?
   - Answer: Access modifiers define the access scope of class properties and methods. In TypeScript, there are three access modifiers: public, private, and protected.

2. What is the difference between public, private, and protected access modifiers?
   - Answer: 
     - `public`: Members are accessible from outside the class.
     - `private`: Members are accessible only within the class.
     - `protected`: Members are accessible within the class and its subclasses.
*/

{
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    public addDeposit(amount: number) {
      this.balance = this.balance + amount;
    }
    public getBalane() {
      return this.balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this.balance;
    }
  }

  const goribAccount = new BankAccount(111, "mr gorib", 10);
  //   goribAccount.balance = 0;
  goribAccount.addDeposit(300);
  const myBalance = goribAccount.getBalane();
  console.log(myBalance);
}
