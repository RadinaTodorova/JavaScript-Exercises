function printAndSum(startNum, endNum) {
let sum = 0;
let num = '';
for (let i = startNum; i<= endNum; i++) {
   num =`${num} ${i}`;
   sum += i;
}
console.log(num);
console.log(`Sum: ${sum}`)
}
printAndSum(5,10);
