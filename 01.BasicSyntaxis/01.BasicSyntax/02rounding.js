function rounding(number, roundTo) {
    if (roundTo > 15) {
        roundTo = 15;
    }
    console.log(parseFloat(number.toFixed(roundTo)));

}
rounding(3.1415926535897932384626433832795,2);
