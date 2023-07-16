function stringSubstring(word, text) {
  let wordToSearch = word.toLowerCase();

  let textToSearch = text.toLowerCase().split(" ");
  if (textToSearch.includes(wordToSearch)) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }
}
stringSubstring("javascript", "JavaScript is the best programming language");
