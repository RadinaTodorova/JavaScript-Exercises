function evenAndOddSubstraction(arr) {
let sumEvenNumber = 0;
let sumOddNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
        if (arr[i] % 2 === 0) {
            sumEvenNumber += arr[i];
        } else {
            sumOddNumber += arr[i];
        }
        
    }
    console.log(sumEvenNumber-sumOddNumber);
}
evenAndOddSubstraction([3,5,7,9]);