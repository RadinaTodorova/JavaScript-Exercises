function solve(input) {
  let books = {};
  let bookInfo = input.shift().split(" | ");
  for (let line of bookInfo) {
    let [title, information] = line.split(": ");
    if (books.hasOwnProperty(title)) {
      if (!books[title].includes(information)) {
        books[title].push(information);
      }
    } else {
      books[`${title}`] = [information];
    }
  }
  let givenWord = input.shift().split(" | ");
  let command = input.shift();

  if (command === "Test") {
    let keysToUse = Object.keys(books);
    for (let word of givenWord) {
      if (keysToUse.includes(word)) {
        console.log(`${word}:`);
        for (const el of books[word]) {
          console.log(`-${el}`);
        }
      }
    }
  }
  if (command === "Hand Over") {
    let toPrint = Object.keys(books).join(" ");
    console.log(toPrint);
  }
}

solve([
  "care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",

  "care | kitchen | flower",

  "Test",
]);
