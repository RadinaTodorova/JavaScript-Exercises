function nonDecreasingSubset(arr) {
  let biggest = 0;
  let newArr = arr.filter((x) => {
    if (x >= biggest) {
      biggest = x;
      return true;
    } else {
      return false;
    }
  });

  console.log(newArr.join(" "));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
