function solve(number) {
let numberToString = String(number);
let total = 0;
for (let i = 0; i < numberToString.length; i++) {
    let stringToNumber = Number(numberToString[i]);
   total +=stringToNumber;
}
console.log(total);
}
solve(245678);