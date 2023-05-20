function sumFirstAndLast(arr) {
  let sum = Number(arr[0]) + Number(arr.pop());
  console.log(sum);
}
sumFirstAndLast(["20", "30", "40"]);
