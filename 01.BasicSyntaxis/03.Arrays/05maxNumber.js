function maxNumber(arr) {
  let maxNumbers = [];
  let isBigger = false;
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];
    for (let j = i + 1; j <= arr.length - 1; j++) {
      let temp = arr[j];
      if (currentValue <= temp) {
        isBigger = false;
        break;
      } else {
        isBigger = true;
      }
    }
    if (isBigger) {
      maxNumbers.push(currentValue);
      isBigger = false;
    }
  }
  maxNumbers.push(arr[arr.length - 1]);
  console.log(maxNumbers.join(" "));
}
maxNumber([41, 41, 34, 20]);
