function binaryToDecimal(binary) {
  let sum = 0;
  for (let i = 0; i < binary.length; i++) {
    let currentPower = binary.length - 1 - i;
    let number = Number(binary[i]);
    sum += number * Math.pow(2, currentPower);
  }
  console.log(sum);
}

binaryToDecimal("11110000");
