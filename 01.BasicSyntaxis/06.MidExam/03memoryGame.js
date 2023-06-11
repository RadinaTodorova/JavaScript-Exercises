function memoryGame(input) {
  let field = input.shift().split(" ");
  let command = input.shift();
  let moves = 0;
  let win = false;
  while (command !== "end") {
    moves++;
    let firstIndex = Number(command.split(" ")[0]);
    let secondIndex = Number(command.split(" ")[1]);

    if (isIndexValid(firstIndex, secondIndex)) {
      compareNumbers(firstIndex, secondIndex);
    } else {
      let elementToAdd = `-${moves}a`;
      indexToAdd = field.length / 2;
      field.splice(indexToAdd, 0, elementToAdd, elementToAdd);
      console.log("Invalid input! Adding additional elements to the board");
    }
    if (field.length <= 0) {
      win = true;
      break;
    }
    command = input.shift();
  }

  if (win) {
    console.log(`You have won in ${moves} turns!`);
  } else {
    console.log("Sorry you lose :(");
    console.log(field.join(" "));
  }
  function compareNumbers(indexOne, indexTwo) {
    if (field[indexOne] === field[indexTwo]) {
      console.log(
        `Congrats! You have found matching elements - ${field[indexOne]}!`
      );
      if (indexOne > indexTwo) {
        field.splice(indexOne, 1);
        field.splice(indexTwo, 1);
      } else {
        field.splice(indexTwo, 1);
        field.splice(indexOne, 1);
      }
    } else {
      console.log("Try again!");
    }
  }
  function isIndexValid(indexOne, indexTwo) {
    if (indexOne === indexTwo) {
      return false;
    }
    if (
      indexOne < 0 ||
      indexTwo < 0 ||
      indexOne > field.length - 1 ||
      indexTwo > field.length - 1
    ) {
      return false;
    }
    return true;
  }
}

memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
console.log('--------------------------------------------------')
memoryGame([
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
    )
    console.log('--------------------------------------------------')
memoryGame([
    "a 2 4 a 2 4", 
    "4 0", 
    "end",
    "0 2",
    "0 1",
    "0 1", 
    
    ]
    )