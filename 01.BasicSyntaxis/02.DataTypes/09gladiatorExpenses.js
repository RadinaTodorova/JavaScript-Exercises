function gladiatorsExpenses(lostGames, helmetPrice, swordprice, shieldPrice, armorPrice) {
let helmetIsBroken = false;
let swordIsBroken = false;
let shieldIsBroken = false;
let countShieldIsBroken = 0;
let armorIsBroken = false;
let totalMoney = 0;

for (let i = 1; i <= lostGames; i++) {
    if(i % 2 === 0) {
helmetIsBroken = true;
totalMoney += helmetPrice;
    }
    if(i % 3 === 0) {
        swordIsBroken = true;
        totalMoney+= swordprice;
    }
    if(helmetIsBroken && swordIsBroken) {
        shieldIsBroken = true;
countShieldIsBroken++;
totalMoney +=shieldPrice;
    }
    
    if (countShieldIsBroken === 2) {
        armorIsBroken = true;
        totalMoney += armorPrice;
        countShieldIsBroken = 0;
    }
     helmetIsBroken = false;
     swordIsBroken = false;
     shieldIsBroken = false;
     armorIsBroken = false;
   
    
}
    console.log(`Gladiator expenses: ${totalMoney.toFixed(2)} aureus`)
}
gladiatorsExpenses(23,
    12.50,
    21.50,
    40,
    200
    );