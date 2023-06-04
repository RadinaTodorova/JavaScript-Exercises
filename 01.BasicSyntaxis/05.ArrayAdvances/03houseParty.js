function houseParty(arr) {
  let listOfPeople = [];

  for (let i = 0; i < arr.length; i++) {
    let currentArr = arr[i].split(" ");
    let name = currentArr.shift();
    let command = currentArr.join(" ");
    if (command === "is going!") {
      if (listOfPeople.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        listOfPeople.push(name);
      }
    } else if (command === "is not going!") {
      if (listOfPeople.includes(name)) {
        let index = listOfPeople.indexOf(name);
        listOfPeople.splice(index, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }
  console.log(listOfPeople.join("\n"));
}
houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);

houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
