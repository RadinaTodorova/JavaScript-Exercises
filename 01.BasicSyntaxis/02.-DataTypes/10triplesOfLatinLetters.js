function solve(number) {
for (let i = 0; i < number; i++) {
    
    for (let j = 0; j < number; j++) {
        
        for (let k = 0; k < number; k++) {
            let letterA = String.fromCharCode(97+i);
            let letterB = String.fromCharCode(97+j);
            let letterC = String.fromCharCode(97+k);
            console.log(`${letterA}${letterB}${letterC}`)
        }
        
    }
    
}
}
solve(2);