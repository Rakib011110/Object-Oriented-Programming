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
