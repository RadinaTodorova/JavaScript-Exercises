function addAndSubstract(arr) {
  let newArr = [];
  let sumOldArray = 0;
  let sumNewArray = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOldArray += arr[i];
    if (arr[i] % 2 === 0) {
      arr[i] += i;
    } else {
      arr[i] -= i;
    }

    newArr.push(arr[i]);
    sumNewArray += arr[i];
  }
  console.log(newArr);
  console.log(sumOldArray);
  console.log(sumNewArray);
}

addAndSubstract([5, 15, 23, 56, 35]);
