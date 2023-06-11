function movingTarget(input) {
  let field = input.shift().split(" ").map(Number);

  for (let i = 0; i < input.length; i++) {
    let commands = input[i].split(" ");
    let command = commands[0];
    let index = Number(commands[1]);
    let power = Number(commands[2]);

    switch (command) {
      case "Shoot":
        if (index >= 0 && index < field.length) {
          field[index] -= power;
          if (field[index] <= 0) {
            field.splice(index, 1);
          }
        }
        break;

      case "Add":
        if (index >= 0 && index < field.length) {
          field.splice(index, 0, power);
        } else {
          console.log("Invalid placement!");
        }

        break;
      case "Strike":
        if (index + power >= field.length || index - power < 0) {
          console.log("Strike missed!");
        } else {
          field.splice(index - power, power * 2 + 1);
        }

        break;
      case "End":
        break;
    }
  }
  console.log(field.join("|"));
}
movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);
