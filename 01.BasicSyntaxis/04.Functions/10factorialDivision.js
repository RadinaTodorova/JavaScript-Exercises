function factorialDivision(numA, numB) {
  let firstFactorialNumber = calcFacturial(numA);
  let secondFactorialNumber = calcFacturial(numB);

  console.log((firstFactorialNumber / secondFactorialNumber).toFixed(2));

  function calcFacturial(num) {
    let result = 1;
    for (let i = num; i > 1; i -= 2) {
      result *= i * (i - 1);
    }
    return result;
  }
}
factorialDivision(5, 2);
