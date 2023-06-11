function searchForANumber(arrayOne, arrayTwo) {
  let elementsToTake = arrayTwo[0];
  let elementsToDelete = arrayTwo[1];
  let numberToSearch = arrayTwo[2];

  let modifiedArr = arrayOne.splice(0, elementsToTake);
  modifiedArr.splice(0, elementsToDelete);
  let result = modifiedArr.filter(elm => elm === numberToSearch);
//   let counter = 0;
//   for (let index = 0; index < modifiedArr.length; index++) {
//     if (modifiedArr[index] === numberToSearch) {
//       counter++;
    
//     }
 // }
    console.log(`Number ${numberToSearch} occurs ${result.length} times.`);

}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
