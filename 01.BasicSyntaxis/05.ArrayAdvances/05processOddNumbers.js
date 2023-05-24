function processOddNumbers(arr) {
  let oddArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      oddArr.push(arr[i]);
    }
  }
  let doubledArr = oddArr.map((x) => x * 2).reverse().join(' ');
  console.log(doubledArr);
}
processOddNumbers([10, 15, 20, 25]);
