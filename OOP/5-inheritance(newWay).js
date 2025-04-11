class BankAccount{
  customerName;
  accountNumber = Date.now();
  balance = 0;

  constructor(customerName, balance){
    this.customerName = customerName
    this.accountNumber;
    this.balance = balance
  }

  deposit(amount){
    this.balance += amount
  }
  withdraw(amount){
    this.balance -= amount
  }
}



class CurrentAccount extends BankAccount{
  transactionLimit;

  constructor(customerName, balance = 0){
    super(customerName, balance);
    this.transactionLimit = 50000
  }

  businessLoan(amount){
    console.log(`taking a business loan of ${amount}`)
  }
}
const princeCurrentAccount = new CurrentAccount("Prince", 10000)
princeCurrentAccount.businessLoan(100000)
princeCurrentAccount.deposit(10000)
princeCurrentAccount.withdraw(5000)
console.log(princeCurrentAccount.transactionLimit)
console.log(princeCurrentAccount)



class SavingAccount extends BankAccount{
  transactionLimit;

  constructor(customerName, balance = 0){
    super(customerName, balance);
    this.transactionLimit = 80000
  }

  personalLoan(amount){
    console.log(`taking a personal loan of ${amount}`)
  }
}