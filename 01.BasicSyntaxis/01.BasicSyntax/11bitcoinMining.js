function solve(gold) {
  let totalMoney = 0;
  const bitcoinPrice = 11949.16;
  let dayBoughtFirstBitcoin = 0;
  let bitcoinBought = false;
  let bitcoinCount = 0;

  for (let i = 0; i < gold.length; i++) {
    if (gold[i] >= 0) {
      let moneyPerDay = gold[i] * 67.51;
      if ((i + 1) % 3 === 0 && i > 0) {
        moneyPerDay -= moneyPerDay * 0.3;
      }

      totalMoney += moneyPerDay;
    }
    for (let j = bitcoinPrice; j <= totalMoney; j++) {
      if (totalMoney >= bitcoinPrice) {
        totalMoney -= bitcoinPrice;
        bitcoinCount++;
        if (!bitcoinBought) {
          bitcoinBought = true;
          dayBoughtFirstBitcoin = i + 1;
        }
      }
    }
  }
  console.log(`Bought bitcoins: ${bitcoinCount}`);
  if (bitcoinCount > 0) {
    console.log(`Day of the first purchased bitcoin: ${dayBoughtFirstBitcoin}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

solve([176.999]);
