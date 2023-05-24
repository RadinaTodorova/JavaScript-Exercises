function numberModification(input) {
  let inputToString = String(input);
  let avg = 0;
  while (avg <= 5) {
    let sum = 0;
    for (let index = 0; index < inputToString.length; index++) {
      let currentNumber = Number(inputToString[index]);
      sum += currentNumber;
    }
    avg = sum / inputToString.length;
    if (avg <= 5) {
    inputToString += "9";
}
  }
  console.log(inputToString);
}
numberModification(5835);
