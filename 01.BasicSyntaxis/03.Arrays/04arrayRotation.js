function arrayRotation(arr, numberOfRotation) {
  for (let i = 0; i < numberOfRotation; i++) {
    let firstElement = arr[0];
    let lastElement = arr[arr.length - 1];
    for (let j = 0; j < arr.length; j++) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
    }
    arr[arr.length - 1] = firstElement;
  }

  console.log(arr.join(" "));
}
arrayRotation([32, 21, 61, 1], 4);
