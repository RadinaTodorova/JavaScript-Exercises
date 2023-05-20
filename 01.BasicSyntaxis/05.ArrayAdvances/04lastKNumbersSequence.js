function lastElementsNumbersSequance(n, k) {
  let newArr = [1];

  for (let i = 1; i < n; i++) {
    let lastElements = newArr.slice(-k);
    let sum = 0;

    for (let j of lastElements) {
      sum += Number(j);
    }

    newArr.push(sum);
  }

  console.log(newArr.join(" "));
}
lastElementsNumbersSequance(6, 3);
