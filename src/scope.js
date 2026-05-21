const added = (a, b) => {
  const result = a + b
  return result
};

const reduced = (a, b) => {
  const result = a - b
  return result
};

const multiply = (a, b) => {
  const result = a * b
  return result
};

// this is visible because the result is within scope
console.log(added(3, 2)); 
console.log(reduced(3, 2));
console.log(multiply(3, 2));

// reference error: because result is not a global scope
console.log(result)
