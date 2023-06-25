function solve(input) {
  let days = Number(input.shift());
  let players = Number(input.shift());
  let energy = Number(input.shift());
  let waterPerDayPerPerson = Number(input.shift());
  let foodPerDayPerPerson = Number(input.shift());
  let totalWater = days * players * waterPerDayPerPerson;
  let totalFood = days * players * foodPerDayPerPerson;

  for (let i = 1; i <= input.length; i++) {
    if (players === 0) {
      break;
    }
    let lostEnergyCurrentDay = input[i - 1];
    energy -= lostEnergyCurrentDay;
    if (energy <= 0) {
      console.log(
        `You will run out of energy. You will be left with ${totalFood.toFixed(
          2
        )} food and ${totalWater.toFixed(2)} water.`
      );
      break;
    }
    if (i % 2 === 0) {
      energy = energy + energy * 0.05;
      totalWater = totalWater - totalWater * 0.3;
    }
    if (i % 3 === 0) {
      energy = energy + energy * 0.1;
      totalFood = totalFood - totalFood / players;
    }
  }
  if (energy > 0) {
    console.log(
      `You are ready for the quest. You will be left with - ${energy.toFixed(
        2
      )} energy!`
    );
  }
}
solve([
  "10",

  "7",

  "5035.5",

  "11.3",

  "7.2",

  "942.3",

  "500.57",

  "520.68",
  "540.87",
  "505.99",
  "630.3",
  "784.20",
  "321.21",
  "456.8",
  "330",
]);
console.log("---------------------");
solve([
  "12",

  "6",

  "4430",

  "9.8",

  "5.5",

  "620.3",

  "840.2",

  "960.1",

  "220",

  "340",

  "674",

  "365",

  "345.5",
  "212",
  "412.12",
  "258",
  "496",
]);
