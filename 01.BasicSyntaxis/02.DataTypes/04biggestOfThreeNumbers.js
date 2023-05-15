function biggestOfThreeNumbers(numberOne, numberTwo, numberThree) {
  let numOne = parseInt(numberOne);
  let numTwo = parseInt(numberTwo);
  let numThree = parseInt(numberThree);
  let maxNumber = Math.max(numOne, numTwo, numThree);

  console.log(maxNumber);
}
biggestOfThreeNumbers(-2, 7, 3);
