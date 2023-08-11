function mirrorWords(arr) {
  let regex =
    /([@]|[#])(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/g;
  let count = 0;
  let result = [];
  for (const text of arr) {
    let matches = text.matchAll(regex);
    for (const match of matches) {
      count++;
      let leftWord = match.groups["firstWord"];
      let rightWord = match.groups["secondWord"];
      let leftReversed = leftWord.split("").reverse().join("");
      if (leftReversed === rightWord) {
        result.push(`${leftWord} <=> ${rightWord}`);
      }
    }
  }
  if (count === 0) {
    console.log("No word pairs found!");
  } else {
    console.log(`${count} word pairs found!`);
  }
  if (result.length > 0) {
    console.log(`The mirror words are:`);
    console.log(`${result.join(", ")}`);
  } else {
    console.log("No mirror words!");
  }
}
mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
