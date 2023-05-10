function specialNumber(number) {
    
    for (let i = 1; i <= number; i++) {
        let numberToString = String(i);
        let sum = 0;
        for (let j = 0; j < numberToString.length; j++) {
            let currentChar = numberToString[j];
            let charAsNumber = Number(currentChar);
            sum +=charAsNumber
            
        }
        let isSpacial = sum === 5 || sum === 7 || sum === 11;
        console.log(`${i} -> ${isSpacial ? 'True' : 'False'}`)
    }
   
}
specialNumber(15);