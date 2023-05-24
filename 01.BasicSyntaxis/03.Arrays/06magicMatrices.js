function magicMetrices(arr) {
  let IsMagic = true;

  for (let index = 0; index < arr.length; index++) {
    let sumCurrentRow = arr[index].reduce((acc, elm) => acc + elm);

    for (let row = 0; row < arr.length; row++) {
      let sumCol = 0;

      for (let col = 0; col < arr.length; col++) {
        sumCol += arr[col][row]; 
      }

      if (sumCol !== sumCurrentRow) {
        IsMagic = false;
        break;
      }
    }

    if (!IsMagic) {
      break;
    }
  }

  if (IsMagic) {
    console.log(true);
  } else {
    console.log(false);
  }
}
magicMetrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 7],
]);
