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

const princeAccount = new BankAccount("Prince", 1000)
princeAccount.deposit(9000)
princeAccount.withdraw(5000)
const rakeshAccount = new BankAccount("Rakesh", 1000)
console.log(princeAccount)
console.log(rakeshAccount)
