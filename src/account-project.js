const accountHolder = "Biodun";
const accountType = "savings";

let balance = 1000;
let isOverdrawn = false;

const tx1 = 200;
const tx2 = -150;
const tx3 = 500;
const tx4 = -75;
const tx5 = -3000;

for (let i = 1; i < 6; i++) {
  const transaction = eval(`tx${i}`)
  balance += transaction
  if (balance < 0 ) {
    console.log(`WARNING: account overdrawn. Balance: ${balance}`)
  } else {
  console.log(`After transaction ${i}: balance is ${balance}`)
  };
};
