function solve(firstNum, secondNum, thirdNum) {

    let result = firstNum + secondNum + thirdNum;
if (result % 1 === 0) {
    console.log(`${result} - Integer`)
} else {
    console.log(`${result} - Float`)
}
//result % 1 === 0 ? result += ' - Integer': sum += ' - Float';
//console.log(result);
} 
solve(9, 100, 1.1);