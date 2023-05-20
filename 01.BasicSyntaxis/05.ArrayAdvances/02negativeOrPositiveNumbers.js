function negativeOrPositiveNumbers(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let num = Number(arr[i]);
    if (num >= 0) {
      newArr.push(num);
    } else {
      newArr.unshift(num);
    }
  }
  console.log(newArr.join("\n"));
}
negativeOrPositiveNumbers(["7", "-2", "8", "9"]);
