const accountHolder = "Biodun";
const accountType = "savings";

const account = {
  holder: "Biodun",
  balance: 1000,
  type: "savings",
  transactions: []
};


let balance = 1000;
let isOverdrawn = false;
const TAX_RATE = 0.075

const transactions = [200, -150, 500, -75, -300]

const applyTransaction = (balance, amount) => {
  balance += eval(amount)
  return balance
};

const getStatus = (balance) => {
  if (balance < 0) {
    return "overdrawn"
  } else if (balance < 200) {
    return "low"
  } return "healthy";
};


function calculateTax(amount) {
  let result = eval(amount * TAX_RATE);
  return result;
}

const applyWithTax = (balance, amount) => {
  applyTransaction(balance, amount);
  let tax_cost = calculateTax(amount);

  balance -= tax_cost;
  return balance;
}

function getTotal (transactions) {
  let netCharge = 0
  for (let i = 0; i < transactions.length; i++) {
    netCharge += transactions[i]
  }; 
  return netCharge
}

function getLargestDeposit(transactions) {
  let largest = transactions[0]

  for (let i = 0; i < transactions.length; i++) {

    if (largest >= transactions[i] && largest > 0) {
      largest
    } else if (largest < transactions[i] && largest > 0) {
      largest = transactions[i]}
  } return largest
};

const processTransaction = (account, amount, description) => {
  let transact = account.transactions;
  let newTransact = {};

  newTransact["amount"] = amount;
  newTransact["description"] = description;
  newTransact["balanceAter"] = (account.balance += amount);
  
  transact.push(newTransact);

  return account
};

const printStatement = (account) => {
  for (let i = 0; i < account.transactions.length; i++) {
    console.log(`Transaction ${i}: NGN ${account.transactions[i].amount}`);
  };
};

console.log(processTransaction(account, 500, "Fees for gas"));
console.log(processTransaction(account, 900, "Groceries"));
console.log(processTransaction(account, 1250, "Tax and Necessities"));

console.log(printStatement(account));