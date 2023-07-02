function wordOccurrences(wordsInput) {
  let words = {};

  for (const word of wordsInput) {
    if (!words[word]) {
      words[word] = 0;
    }
    words[word]++;
  }
  let wordsEntries = Object.entries(words).sort((a, b) => b[1] - a[1]);
  for (const [word, count] of wordsEntries) {
    console.log(`${word} -> ${count} times`);
  }
}
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
