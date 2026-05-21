function add (a, b) {
  return (a +b)
};

function multiply(a, b) {
  return (a * b)
};

function fullName(first, last) {
  return `${first} ${last}`
};

function isAdult(age) {
  if (age >= 18) {
    return true
  } return false;
}


console.log(add(3, 4));
console.log(multiply(3, 4));
console.log(fullName('Biodun', 'Aguda'));
console.log(isAdult(34));