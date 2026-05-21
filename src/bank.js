const accountHolder = "Biodun";
const accountType = "savings";

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

// for (let i = 1; i < transactions.length; i++) {

//   console.log(`Tx ${i}: ${eval(`tx${i}`) > 0 ? "deposit" : "withdrawal"} of ${eval(`tx${i}`)}. Balance: ${applyWithTax(balance, eval(`tx${i}`))}. Status: ${getStatus(applyWithTax(balance, eval(`tx${i}`)))}`)
// };

console.log(getTotal(transactions))
console.log(getLargestDeposit(transactions));