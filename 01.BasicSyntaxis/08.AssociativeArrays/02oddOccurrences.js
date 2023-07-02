function oddOccurrences(input) {
  let result = {};
  let words = input.toLowerCase().split(' ');

  for (const word of words) {
    if (!result.hasOwnProperty(word)) {
      result[word] = 0;
    }
    result[word]++;
  }
  let arrOfOddElements = Object.entries(result)
    .filter((double) => double[1] % 2 !== 0)
    .sort((a, b) => b[1] - a[1]);

  let final = [];

  for (const arr of arrOfOddElements) {
    final.push(arr[0]);
  }
  console.log(final.join(" "));
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
