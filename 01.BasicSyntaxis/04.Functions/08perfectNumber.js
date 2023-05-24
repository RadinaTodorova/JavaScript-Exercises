function perfectNumber(number) {
  let result = division(number);

  const isPerfect = () => {
    if (result === number) {
      return true;
    }
    return false;
  };
  
  let isItPerfectNumber = isPerfect();

  if (isItPerfectNumber) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }

  function division(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    return sum;
  }
}
perfectNumber(6);
