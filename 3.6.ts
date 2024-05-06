/*  

Getter এবং Setter হল ক্লাসের প্রোপার্টির মান রিট্রাইভ এবং সেট করার জন্য ব্যবহৃত মেথড।

#### Interview Questions:
1. What are getters and setters in TypeScript?
   - Answer: Getters and setters are methods used to retrieve and set the values of class properties.
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

    set deposit(amount: number) {
      this.balance = this.balance + amount;
    }

    // public addDeposit(amount: number) {
    //   this.balance = this.balance + amount;
    // }

    get Balance() {
      return this.balance;
    }

    // public getBalane() {
    //   return this.balance;
    // }
  }

  class StudentAccount extends BankAccount {
    test() {
      this.balance;
    }
  }

  const goribAccount = new BankAccount(111, "mr gorib", 60);
  //   goribAccount.balance = 0;
  //   goribAccount.addDeposit(300);
  goribAccount.deposit = 40;
  //   const myBalance = goribAccount.getBalane();

  const myBalance = goribAccount.Balance; /// property er moto kore
  console.log(myBalance);
}
