function equalSum(arr) {
  let isFound = false;
  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    if (i === arr.length - 1) {
      rightSum = 0;
    } else {
      for (let j = i + 1; j < arr.length; j++) {
        rightSum += arr[j];
      }
    }
    if (i === 0) {
      leftSum = 0;
    } else {
      for (let k = i - 1; k >= 0; k--) {
        leftSum += arr[k];
      }
    }
    if (leftSum === rightSum) {
      isFound = true;
      console.log(i);
      break;
    }
  }
  if (!isFound) {
  if (arr.length === 1) {
    console.log("0");
  } else {
    console.log("no");
  }
}
}
equalSum([1]);
