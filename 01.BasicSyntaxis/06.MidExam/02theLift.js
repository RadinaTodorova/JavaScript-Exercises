function theLift(array) {
  let people = Number(array.shift());
  let wagoons = array[0].split(" ").map(Number);
  let capacity = 4;

  for (let index = 0; index < wagoons.length; index++) {
    if (wagoons[index] < capacity) {
      let currentFreeSpace = capacity - wagoons[index];
      if (people <= currentFreeSpace) {
        wagoons[index] += people;
        people = 0;
        break;
      } else {
        wagoons[index] += currentFreeSpace;
        people -= currentFreeSpace;
      }
    }
  }
  if (people === 0 && wagoons.some((item) => item < 4)) {
    console.log("The lift has empty spots!");
    console.log(`${wagoons.join(" ")}`);
  } else if (people > 0) {
    console.log(`There isn't enough space! ${people} people in a queue!`);
    console.log(`${wagoons.join(" ")}`);
  } else {
    console.log(`${wagoons.join(" ")}`);
  }
}
theLift(["20", "0 0 0 0 0"]);
theLift(["20", "0 2 0"]);
