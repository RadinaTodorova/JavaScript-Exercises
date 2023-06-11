function bombNumbers(field, specificationOfBomb) {
  let bombNumber = specificationOfBomb.shift();
  let powerOfBomb = specificationOfBomb.shift();

  for (let index = 0; index < field.length; index++) {
    let indexBomb = field.indexOf(bombNumber);
    if (indexBomb < 0) {
      break;
    } else if (indexBomb - powerOfBomb <= 0) {
      field.splice(indexBomb + 1, powerOfBomb);
      field.splice(0, indexBomb + 1);
    } else {
      field.splice(indexBomb + 1, powerOfBomb);
      field.splice(indexBomb - powerOfBomb, powerOfBomb + 1);
    }
  }

  let result = field.reduce((a, b) => {
    return a + b;
  }, 0);

  console.log(result);
}
//bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
//bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
//bombNumbers([1, 3, 0, 1, 2, 0], [3, 2]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
