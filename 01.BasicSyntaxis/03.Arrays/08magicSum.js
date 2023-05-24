function magicSum(arr, magicNumber) {
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      let nextNum = arr[j];
      if (currentNum + nextNum === magicNumber) {
        console.log(`${currentNum} ${nextNum}`);
      }
    }
  }
}

magicSum([14, 20, 60, 13, 7, 19, 8], 27);
