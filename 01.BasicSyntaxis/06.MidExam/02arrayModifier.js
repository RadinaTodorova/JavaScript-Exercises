function arrayModifier(input) {
  let myArr = input.shift().split(" ").map(Number);
  let commands = input.slice(0);
  let arrResult = myArr.slice(0);
 
  for (let i = 0; i < commands.length; i++) {
    let tokens = commands[i].split(" ");
    let command = tokens.shift();
    let indexOne = Number(tokens.shift());
    let indexTwo = Number(tokens.shift());

    switch (command) {
      case "swap":
        let temp = arrResult[indexOne];
        arrResult[indexOne] = arrResult[indexTwo];
        arrResult[indexTwo] = temp;

        break;
      case "multiply":
        arrResult[indexOne] = arrResult[indexOne] * arrResult[indexTwo];
        break;
      case "decrease":
        arrResult = arrResult.map((x) => x - 1);
        break;
      case "end":
        break;
    }
  }
  console.log(arrResult.join(", "));
}

arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
//86, 7382, 2369942, -124, 41, 89, -3
