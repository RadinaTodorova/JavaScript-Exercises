function train(arr) {
  let passengers = arr.shift().split(" ").map(Number);
  let capacity = Number(arr.shift());

  for (let command of arr) {
    let currentCommand = command.split(" ");

    if (currentCommand[0] === "Add") {
      passengers.push(Number(currentCommand[1]));
    } else {
      for (let j = 0; j < passengers.length; j++) {
        if (passengers[j] + Number(currentCommand[0]) <= capacity) {
          passengers[j] += Number(currentCommand[0]);
          break;
        }
      }
    }
  }
  console.log(passengers.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
