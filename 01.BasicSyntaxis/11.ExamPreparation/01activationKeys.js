function activationKeys(input) {
  let [activationKey, ...instructions] = input;

  let instruction = instructions.shift();
  while (instruction !== "Generate") {
    let arguments = instruction.split(">>>");
    let instructionName = arguments.shift();

    switch (instructionName) {
      case "Slice":
        let startIndex = Number(arguments[0]);
        let endIndex = Number(arguments[1]);
   redundant = activationKey.substring(startIndex, endIndex);
   activationKey = activationKey.replace(redundant, '')
        console.log(activationKey);
        break;

      case "Flip":
        let casing = arguments[0];
        let start = Number(arguments[1]);
        let end = Number(arguments[2]);
        let part = activationKey.substring(start, end);
        let newPart = casing === "Upper" ? part.toUpperCase() : part.toLowerCase();
        activationKey = activationKey.replace(part, newPart);
        console.log(activationKey);

        break;
      case "Contains":
        let substring = arguments[0];
        if (activationKey.includes(substring)) {
          console.log(`${activationKey} contains ${substring}`);
        } else {
          console.log("Substring not found!");
        }
        break;
    }

    instruction = instructions.shift();
  }

  console.log(`Your activation key is: ${activationKey}`);
}
activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
