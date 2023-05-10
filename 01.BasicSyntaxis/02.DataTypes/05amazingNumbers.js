function amazingNumbers (number) {
let numberToString = String(number);
let result = 0;
for (i = 0; i < numberToString.length; i++) {
    let eachNumber = Number(numberToString[i]);
    result += eachNumber;
}
if (String(result).includes(9)) {
    console.log(`${number} Amazing? True`) 
} else {
    console.log(`${number} Amazing? False`) 
}

}
amazingNumbers(1233);