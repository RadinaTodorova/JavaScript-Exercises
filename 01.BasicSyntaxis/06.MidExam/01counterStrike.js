function counterStrike(input) {
  let energy = Number(input.shift());
  let command = input.shift();
  let moves = 0;
  let notEnoughEnerty = false;

  while (command !== "End of battle") {
    let enemyPower = Number(command);

    if (energy >= enemyPower) {
      energy -= enemyPower;
      moves++;
    } else {
      if (energy < 0) {
        energy = 0;
      }
      notEnoughEnerty = true;

      break;
    }

    if (moves % 3 === 0) {
      energy += moves;
    }
    if (input.length === 0) {
      break;
    }
    command = input.shift();
  }

  if (notEnoughEnerty) {
    console.log(
      `Not enough energy! Game ends with ${moves} won battles and ${energy} energy`
    );
  } else if (input.length === 0) {
    console.log(`Won battles: ${moves}. Energy left: ${energy}`);
  } else {
    console.log(`Won battles: ${moves}. Energy left: ${energy}`);
  }
}
counterStrike(["200", "End of battle"]);
console.log("--------------------------------");

counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
