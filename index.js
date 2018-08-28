/* Features:

Here's a list of features that our code needs to support:

    Allow multiple accounts to be created
    Each account can have many transactions
    Allow withdrawals and deposits into accounts
    Allow us to retrieve the transaction history of an account (all withdrawals and deposits)
    Allow us to retrieve the current balance of the account at any time
    Don't allow withdrawals that exceed the remaining balance of the account
 */
/* 
let balance = 500.00;

//Withdrawal Class
class Withdrawal {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance -= this.amount;
  }

}

//Deposit Class
class Deposit {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.amount;
  }
} */

//Account Class
class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let balance = 0;
    // Calculate the balance using the transaction objects.
    for (var t in this.transactions) {
      console.log(`this.transactions[t].value is, ${this.transactions[t].value}`);
      return balance += this.transactions[t].value;
    }

    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

//Transaction Class
class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    debugger;
    if (!this.isAllowed()) return false;
    // Keep track of the time of the transaction
    debugger;
    this.time = new Date();
    // Add the transaction to the account
    this.account.addTransaction(this);
    return true;
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }

  isAllowed() {
    return true;
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }

  isAllowed() {
    console.log(`this.account.balance + this.amount, ${this.account.balance + this.amount}`);
    return (this.account.balance - this.amount < 0 ? false : true);
  }
}
// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
/* 
t1 = new Withdrawal(50.25);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99);
t2.commit();
console.log('Transaction 2:', t2);

console.log('Balance:', balance);

t3 = new Deposit(120.00);
t3.commit();
console.log('Transaction 3:', t3);
console.log('Balance:', balance);
//Updating the new account
t1 = new Withdrawal(50.25, myAccount);
t1.commit();
 */

/* //Adding a new account
const myAccount = new Account("snow-patrol");

//Testing after refactoring
t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);
//console.log('Balance:', balance);
console.log('Total Transactions:', myAccount.transactions);
console.log('Ending Balance:', myAccount.balance);
 */

const myAccount = new Account();

console.log('Starting Account Balance: ', myAccount.balance);

console.log('Attempting to withdraw even $1 should fail...');
const t1 = new Withdrawal(1.00, myAccount);
console.log('Commit result:', t1.commit());
console.log('Account Balance: ', myAccount.balance);

console.log('Depositing should succeed...');
const t2 = new Deposit(9.99, myAccount);
console.log('Commit result:', t2.commit());
console.log('Account Balance: ', myAccount.balance);

console.log('Withdrawal for 9.99 should be allowed...');
const t3 = new Withdrawal(9.99, myAccount);
console.log('Commit result:', t3.commit());

console.log('Ending Account Balance: ', myAccount.balance);
console.log("Lookings like I'm broke again");

console.log('Account Transaction History: ', myAccount.transactions);
