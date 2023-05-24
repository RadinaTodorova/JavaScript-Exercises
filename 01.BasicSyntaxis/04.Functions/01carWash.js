function carWash(command) {
  let clean = 0;

  for (let i = 0; i < command.length; i++) {
    if (command[i] === "soap") {
      add(10);
    } else if (command[i] === "water") {
      let waterAdd = clean * 0.2;
      add(waterAdd);
    } else if (command[i] === "vacuum cleaner") {
      let vacuumAdd = clean * 0.25;
      add(vacuumAdd);
    } else if (command[i] === "mud") {
      let mudSubstract = clean * 0.1;
      substract(mudSubstract);
    }
  }
  console.log(`The car is ${clean.toFixed(2)}% clean.`);

  function add(number) {
    clean += number;
  }

  function substract(num) {
    clean -= num;
  }
}
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
