class BankAccount {
  customerName;
  accountNumber = Date.now();
  balance = 0;

  constructor(customerName, balance){
    this.customerName = customerName;
    this.accountNumber;
    this.balance = balance;
  }

  deposit(amount){
    this.balance += amount
  }
  withdraw(amount){
    this.balance -= amount
  }
}

const princeAccount = new BankAccount("Prince", 1000)
princeAccount.deposit(9000)
princeAccount.withdraw(5000)
const rakeshAccount = new BankAccount("Rakesh", 1000)
console.log(princeAccount)
console.log(rakeshAccount)