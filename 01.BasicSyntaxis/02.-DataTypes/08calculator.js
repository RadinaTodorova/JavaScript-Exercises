function solve(numberOne, operator, numberTwo) {
switch (operator) {
    case '+': console.log((numberOne + numberTwo).toFixed(2)); break;
        case '-': console.log((numberOne - numberTwo).toFixed(2)); break;
        case '/': console.log((numberOne/numberTwo).toFixed(2)); break;
        case '*': console.log((numberOne*numberTwo).toFixed(2));break;
    
}

}
solve(5,
    '+',
    10
    );