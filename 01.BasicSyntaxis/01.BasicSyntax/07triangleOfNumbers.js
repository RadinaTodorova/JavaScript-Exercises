function solve(number) {
  for (i = 1; i <= number; i++) {
    let result = '';
    for (j = 1; j <= i; j++) {
result = `${result} ${i}`;
    }
    console.log(result);
  }
}
solve(3);
