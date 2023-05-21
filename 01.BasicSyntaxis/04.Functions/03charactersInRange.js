function charactersInRange(charA, charB) {
  let numFromCharA = converstFromCharToNumber(charA);
  let numFromCharB = converstFromCharToNumber(charB);
  // let startIndex = numFromCharA > numFromCharB ? numFromCharB : numFromCharA;
  //let endIndex = numFromCharA > numFromCharB ? numFromCharA : numFromCharB;
  let buff = "";
  let startIndex = smallestNumber(numFromCharA, numFromCharB);
  let endIndex = biggestNumber(numFromCharA, numFromCharB);

  for (let i = startIndex + 1; i < endIndex; i++) {
    buff += converstFromNumberToChar(i) + " ";
  }

  function converstFromNumberToChar(num) {
    return String.fromCharCode(num);
  }
  function converstFromCharToNumber(char) {
    return char.charCodeAt(0);
  }

  function smallestNumber(a, b) {
    return Math.min(a, b);
  }
  function biggestNumber(a, b) {
    return Math.max(a, b);
  }

  console.log(buff);
}
charactersInRange("a", "d");
