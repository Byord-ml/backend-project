const accountHolder = "Biodun";
const accountType = "savings";

let balance = 1000;
let isOverdrawn = false;
const TAX_RATE = 0.075

const tx1 = 200;
const tx2 = -150;
const tx3 = 500;
const tx4 = -75;
const tx5 = -3000;


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

for (let i = 1; i < 6; i++) {

  // console.log(applyWithTax( balance, eval(`tx${i}`))) }
  console.log(`Tx ${i}: ${eval(`tx${i}`) > 0 ? "deposit" : "withdrawal"} of ${eval(`tx${i}`)}. Balance: ${applyWithTax(balance, eval(`tx${i}`))}. Status: ${getStatus(applyWithTax(balance, eval(`tx${i}`)))}`)
};