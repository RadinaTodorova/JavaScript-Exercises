function shoppingList(data) {
  let list = data.shift().split("!");

  let index = 0;
  let command = data[index];
  index++;

  while (command !== "Go Shopping!") {
    let tokens = command.split(" ");
    switch (tokens[0]) {
      case "Urgent":
        if (list.indexOf(tokens[1]) === -1) {
          list.unshift(tokens[1]);
        }
        break;
      case "Unnecessary":
        if (list.indexOf(tokens[1]) !== -1) {
          list.splice(list.indexOf(tokens[1]), 1);
        }

        break;
      case "Correct":
        if (list.indexOf(tokens[1]) !== -1) {
          list[list.indexOf(tokens[1])] = tokens[2];
        }
        break;
      case "Rearrange":
        if (
          list.indexOf(tokens[1]) !== -1 &&
          list.indexOf(tokens[1]) !== list.lenght
        ) {
          let currentItem = list.splice(list.indexOf(tokens[1]), 1);
          list.push(currentItem[0]);
        }
        break;
    }
    command = data[index];
    index++;
  }
  console.log(list.join(", "));
}
shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
