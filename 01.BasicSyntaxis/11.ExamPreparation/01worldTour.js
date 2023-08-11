function worldTour(data) {
  let initialString = data.shift();

  for (const line of data) {
    if (line === "Travel") {
        console.log(`Ready for world tour! Planned stops: ${initialString}`);
      break;
    }
    let token = line.split(":");
    let action = token[0];

    switch (action) {
      case "Add Stop":
        let index = Number(token[1]);
        let value = token[2];
        if (index >= 0 && index < initialString.length) {
          initialString =
            initialString.substring(0, index) +
            value +
            initialString.substring(index);
        }
        console.log(initialString);
        break;
      case "Remove Stop":
        let startIndex = Number(token[1]);
        let endIndex = Number(token[2]);
        if (
          startIndex >= 0 &&
          startIndex < initialString.length &&
          endIndex >= 0 &&
          endIndex < initialString.length
        ) {
          let start = initialString.substring(0, startIndex);
          let end = initialString.substring(endIndex + 1);
          initialString = start + end;
        }
        console.log(initialString);

        break;
      case "Switch":
        let oldString = token[1];
        let newString = token[2];
        if (initialString.includes(oldString)) {
          initialString = initialString.split(oldString).join(newString);
        }
        console.log(initialString);
        break;
    }
  }
 
}
worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
 