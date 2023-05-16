function simpleCalculator(numOne, numTwo, operator) {
  let subtract = (numOne, numTwo) => {
   return numOne - numTwo;
  };

  // function subtract(numOne, numTwo) {
  // return numOne - numTwo;
  //}

  let add = (numOne, numTwo) => {
    return numOne + numTwo;
  };

  let divide = (numOne, numTwo) => {
    return numOne / numTwo;
  };

  let multiply = (numOne, numTwo) => {
    return numOne * numTwo;
  };

  let result = 0;
  switch (operator) {
    case "subtract":
      result = subtract(numOne, numTwo);

      break;
    case "add":
      result = add(numOne, numTwo);

      break;
    case "divide":
      result = divide(numOne, numTwo);

      break;
    case "multiply":
      result = multiply(numOne, numTwo);

      break;

    default:
      break;
  }
  return result;
}
console.log(simpleCalculator(5, 5, "subtract"));
