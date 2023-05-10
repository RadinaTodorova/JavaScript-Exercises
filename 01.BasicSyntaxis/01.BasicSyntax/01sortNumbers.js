function sortNumbers(numberOne, numberTwo, numberThree) {

    if (numberOne > numberTwo && numberOne > numberThree) {
        if (numberTwo > numberThree) {
        console.log(`${numberOne}\n${numberTwo}\n${numberThree}\n`);
        } else {
            console.log(`${numberOne}\n${numberThree}\n${numberTwo}\n`);
        }

    }
    if (numberTwo > numberOne && numberTwo > numberThree) {
        if (numberOne > numberThree) {
        console.log(`${numberTwo}\n${numberOne}\n${numberThree}\n`);
        } else {
            console.log(`${numberTwo}\n${numberThree}\n${numberOne}\n`);
        }
        
    }
    if (numberThree > numberOne && numberThree > numberTwo) {
        if (numberOne > numberTwo) {
        console.log(`${numberThree}\n${numberOne}\n${numberTwo}\n`);
        } else {
            console.log(`${numberThree}\n${numberTwo}/n${numberOne}/n`);
        }
        
    }
}
sortNumbers(2,
    1,
    3
    );