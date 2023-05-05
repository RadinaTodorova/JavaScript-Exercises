function solve(lostGames, helmetPrice, swordprice, shieldPrice, armorPrice) {
let helmetIsBroken = false;
let swordIsBroken = false;
let shieldIsBroken = false;
let countShieldIsBroken = 0;
let armorIsBroken = false;
let totalMoney = 0;
let lostGamesToString = String(lostGames);
for (let i = 1; i <= lostGames; i++) {
    if(i % 2 === 0) {
helmetIsBroken = true;
totalMoney += helmetPrice;
    }
    if(i % 3 === 0) {
        swordIsBroken = true;
        totalMoney+= swordprice;
    }
    if(i % 6 === 0) {
        shieldIsBroken = true;
countShieldIsBroken++;
totalMoney +=shieldPrice;
    }
    if (countShieldIsBroken % 2 === 0 && countShieldIsBroken !== 0) {
        armorIsBroken = true;
        totalMoney += armorPrice;
    }
 
}
    console.log(`Gladiator expenses: ${totalMoney.toFixed(2)} aureus`)
}
solve(23,
    12.50,
    21.50,
    40,
    200
    );