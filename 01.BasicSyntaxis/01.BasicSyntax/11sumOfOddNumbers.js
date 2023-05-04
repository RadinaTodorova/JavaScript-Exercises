function solve(n) {
let oddNumber = 1;
let num = 1;
let sumNumbers = 0;

    while(oddNumber <= n) {
if (num % 2 === 1) {
    console.log(num);
    oddNumber++;
    sumNumbers += num;
}
       num++; 
    }
console.log(`Sum: ${sumNumbers}`);
}
solve(5);
