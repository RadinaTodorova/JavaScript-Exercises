function thePianist(input) {
  let n = Number(input.shift());
  let songList = {};

  for (let i = 0; i < n; i++) {
    let [piece, composer, key] = input.shift().split("|");
    songList[piece] = { composer, key };
  }

  while (input[0] !== "Stop") {
    let line = input.shift().split("|");
    let command = line[0];
    let piece = line[1];

    if (command === "Add") {
      let composer = line[2];
      let key = line[3];
      if (songList.hasOwnProperty(piece)) {
        console.log(`${piece} is already in the collection!`);
      } else {
        songList[piece] = { composer, key };
        console.log(
          `${piece} by ${composer} in ${key} added to the collection!`
        );
      }
    } else if (command === "Remove") {
      if (songList.hasOwnProperty(piece)) {
        console.log(`Successfully removed ${piece}!`);
        delete songList[piece];
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    } else if (command === "ChangeKey") {
      let newKey = line[2];
      if (songList.hasOwnProperty(piece)) {
        songList[piece].key = newKey;
        console.log(`Changed the key of ${piece} to ${newKey}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    }
  }

  for (let song of Object.entries(songList)) {
    console.log(
      `${song[0]} -> Composer: ${song[1].composer}, Key: ${song[1].key}`
    );
  }
}
thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
