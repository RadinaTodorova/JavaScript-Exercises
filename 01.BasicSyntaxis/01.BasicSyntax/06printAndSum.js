function solve(startNum, endNum) {
let sum = 0;
let num = '';
for (let i = startNum; i<= endNum; i++) {
   num =`${num} ${i}`;
   sum += i;
}
console.log(num);
console.log(`Sum: ${sum}`)
}
solve(5,10);
