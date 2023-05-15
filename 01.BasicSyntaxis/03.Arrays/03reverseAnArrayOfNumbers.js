function reverseAnArrayOfNumbers(number, arr) {
  let newArr = [];
  for (let i = number - 1; i >= 0; i--) {
    const element = arr[i];
    newArr.push(element);
  }
  console.log(newArr.join(" "));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
