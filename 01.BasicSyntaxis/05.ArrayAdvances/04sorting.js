function sorting(arr) {
  arr.sort((a, b) => a - b);
  let secondArr = [...arr].reverse();
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
   if(index === arr.length-1) {
    newArr.push(secondArr.shift());
   } else {
    newArr.push(secondArr.shift());
    newArr.push(arr.shift());
}
  }
  console.log(newArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
console.log('---------')
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 7]);

