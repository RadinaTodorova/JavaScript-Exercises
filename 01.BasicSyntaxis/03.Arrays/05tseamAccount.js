function tseamAccount(arr) {
  let account = arr.shift().split(" ");

  for (let i = 0; i < arr.length; i++) {
    let input = arr[i].split(" ");
    let command = input[0];
    let game = input[1];
    switch (command) {
      case "Install":
        if (!account.includes(game)) {
          account.push(game);
        }

        break;
      case "Uninstall":
        if (account.includes(game)) {
          let indexOfGame = account.indexOf(game);
          account.splice(indexOfGame, 1);
        }

        break;
      case "Update":
        if (account.includes(game)) {
          let indexOfGame = account.indexOf(game);
          let updatedGame = account.splice(indexOfGame, 1);
          account.push(updatedGame);
        }

        break;
      case "Expansion":
        let expansionGame = game.split("-");
        let gameToInsert = game.split("-").join(":");
        if (account.includes(expansionGame[0])) {
          let indexOfGame = account.indexOf(expansionGame[0]);
          account.splice(indexOfGame + 1, 0, gameToInsert);
        }
        break;
      default:
        break;
    }
  }
  console.log(account.join(" "));
}
tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
