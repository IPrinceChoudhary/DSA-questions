class BankAccount{
  customerName;
  accountNumber = Date.now();
  #balance = 0;

  constructor(customerName, balance){
    this.customerName = customerName
    this.accountNumber;
    this.#balance = balance
  }

  deposit(amount){
    this.#balance += amount
  }
  withdraw(amount){
    this.#balance -= amount
  }
  // setBalance(amount){ // old way without getters and setters
  //   if(typeof amount !== "number"){
  //     throw new Error("amount is not a valid input")
  //   }
  //   this.#balance += amount
  // }
  // getBalance(){
  //   return this.#balance;
  // }
  set updateBalance(amount){
    if(typeof amount !== "number"){
      throw new Error("amount is not a valid input");
    }
    this.#balance += amount
  }
  get showBalance(){
    return this.#balance
  }
}

class CurrentAccount extends BankAccount{
  transactionLimit;

  constructor(customerName, balance = 0){
    super(customerName, balance);
    this.transactionLimit = 50000
  }

  #calculatingInterest(){
    // internal logic which we don't want accessible to others.
    console.log("Calculating interest")
  }

  businessLoan(amount){
    this.#calculatingInterest(amount)
    console.log(`taking a business loan of ${amount}`)
  }
}

const princeCurrentAccount = new CurrentAccount("Prince", 10000)
princeCurrentAccount.updateBalance = 20000
console.log(princeCurrentAccount)
console.log(princeCurrentAccount.showBalance)
princeCurrentAccount.businessLoan(100000)