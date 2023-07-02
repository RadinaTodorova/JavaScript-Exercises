function wordTracker(data) {
  let result = {};

  let findWord = data.shift().split(" ");
  for (const word of findWord) {
    result[word] = 0;
  }

  for (const word of data) {
    if (result.hasOwnProperty(word)) {
      result[word] += 1;
    }
  }
  let sortArr = Object.entries(result).sort((a, b) => b[1] - a[1]);
  for (const line of sortArr) {
    console.log(`${line[0]} - ${line[1]}`);
  }
}
wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
