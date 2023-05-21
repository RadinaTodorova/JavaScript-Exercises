function addAndSubtract(numberOne, NumberTwo, numThree) {
  function add(a, b) {
    return a + b;
  }
  //let add(a,b) => a + b;
  function subtract(a, b) {
    return a - b;
  }
  //let substract(a,b) => a - b;
  let sum = add(numberOne, NumberTwo);
  let substract = subtract(sum, numThree);
  return substract;
}
console.log(addAndSubtract(23, 6, 10));
