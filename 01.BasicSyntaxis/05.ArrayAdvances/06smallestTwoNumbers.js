function smallestTwoNumbers(arr) {
  let sortedInAscending = arr
    .sort((a, b) => a - b)
    .slice(0, 2)
    .join(" ");
  console.log(sortedInAscending);
}
smallestTwoNumbers([30, 15, 50, 5]);
