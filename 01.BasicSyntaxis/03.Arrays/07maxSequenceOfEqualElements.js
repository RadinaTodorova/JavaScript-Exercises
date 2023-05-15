function maxSequenceOfEqualElements(arr) {
  let longestSequence = [];
  let counter = 0;
  let currentSequence = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      currentSequence.push(arr[i]);
    } else {
      if (currentSequence.length > 0) {
        currentSequence.push(arr[i]);
        if (longestSequence.length < currentSequence.length) {
          let temp = [];
          for (let j = 0; j < currentSequence.length; j++) {
            temp.push(currentSequence[j]);
          }
          currentSequence = [];
          longestSequence = temp;
        } else {
          currentSequence = [];
        }
      }
    }
  }
  console.log(longestSequence.join(' '));
}
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
