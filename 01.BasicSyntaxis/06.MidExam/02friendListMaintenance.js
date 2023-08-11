function friendListMaintenance(input) {
  let listOfFriend = input.shift().split(", ");
  let isBlacklisted = [];
  let isLost = [];

  for (let i = 0; i < input.length; i++) {
    let token = input[i].split(" ");
    let command = token[0];

    switch (command) {
      case "Blacklist":
        let name = token[1];
        if (listOfFriend.includes(name)) {
          let itemIndex = listOfFriend.indexOf(name);
          let currentName = listOfFriend[itemIndex];
          isBlacklisted.push(currentName);
          listOfFriend[itemIndex] = "Blacklisted";
          console.log(`${currentName} was blacklisted.`);
        } else {
          console.log(`${name} was not found.`);
        }
        break;

      case "Error":
        let indexGiven = Number(token[1]);
        let nameToUse = listOfFriend[indexGiven];
        if (
          indexGiven >= 0 &&
          indexGiven < listOfFriend.length &&
          !isBlacklisted.includes(nameToUse) &&
          !isLost.includes(nameToUse) && nameToUse !== 'Blacklisted' && nameToUse !== 'Lost'
        ) {
          isLost.push(nameToUse);
          listOfFriend[indexGiven] = 'Lost';
          console.log(`${nameToUse} was lost due to an error.`);
        }

        break;

      case "Change":
        let indexToChange = Number(token[1]);
        let newName = token[2];
        if(indexToChange >= 0 && indexToChange < listOfFriend.length) {
            let oldName = listOfFriend[indexToChange];
            listOfFriend[indexToChange] = newName;
            console.log(`${oldName} changed his username to ${newName}.`);
        }
        break;

      case "Report":
        console.log(`Blacklisted names: ${isBlacklisted.length}`);
        console.log(`Lost names: ${isLost.length}`);
        console.log(listOfFriend.join(" "));
        break;
    }
  }
 
}
friendListMaintenance(["Mike, John, Eddie", "Blacklist Mike", "Error 0", "Report"]);
console.log("--------------------");
friendListMaintenance([
  "Mike, John, Eddie, William",
  "Error 3",
  "Error 3",
  "Change 0 Mike123",
  "Report",
]);
console.log("--------------------");
friendListMaintenance([
  "Mike, John, Eddie, William",

  "Blacklist Maya",

  "Error 1",

  "Change 4 George",

  "Report",
]);
