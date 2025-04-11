function BankAccount(name, balance = 0){
  this.customerName = name;
  this.accountNumber = Date.now();
  this.balance = balance
}

BankAccount.prototype.deposit = function(amount){
  this.balance = this.balance + amount;
}
BankAccount.prototype.withdraw = function(amount){
  this.balance -= amount
}



function CurrentAccount(name, balance = 0){
  BankAccount.call(this, name, balance) // constructor linking
  this.transactionLimit = 50000;
}

// order matters
CurrentAccount.prototype = Object.create(BankAccount.prototype);
CurrentAccount.prototype.businessLoan = function(amount){
  console.log(`Taking business loan amount of ${amount}`)
}

const princeCurrentAccount = new CurrentAccount("Prince", 10000)
princeCurrentAccount.businessLoan(100000)
princeCurrentAccount.deposit(10000)
princeCurrentAccount.withdraw(5000)
console.log(princeCurrentAccount.transactionLimit)
console.log(princeCurrentAccount)



function SavingAccount(name, balance = 0){
  BankAccount.call(this, name, balance)
  this.transactionLimit = 80000;
}

SavingAccount.prototype = Object.create(BankAccount.prototype)
SavingAccount.prototype.personalLoan = function(amount){
  console.log(`Taking personal loan amount of ${amount}`)
}
const princeSavingAccount = new SavingAccount("Prince", 20000)
console.log(princeSavingAccount)