function oddAndEvenSum(number) {
  let numberToString = String(number);
  let sumOdd = 0;
  let sumEven = 0;

  for (let i = 0; i < numberToString.length; i++) {
    if (Number(numberToString[i]) % 2 === 0) {
      sumEven += Number(numberToString[i]);
    } else {
      sumOdd += Number(numberToString[i]);
    }
  }
  console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

oddAndEvenSum(1000435);
