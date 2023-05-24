function nxNMatrix(number) {
  for (let index = 0; index < number; index++) {
    let nxnMatrix = col(number);

    console.log(nxnMatrix);
  }
}

function col(colCount) {
  let result = "";
  for (let index = 0; index < colCount; index++) {
    result += ` ${colCount}`;
  }

  return result;
}
nxNMatrix(7);
