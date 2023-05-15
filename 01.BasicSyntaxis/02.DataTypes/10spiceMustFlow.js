function spiceMustFlow(startingYield) {
  let counterDays = 0;
  let spiceExtracted = 0;
  let currentYield = 0;
  while (startingYield >= 100) {
    currentYield = startingYield - 26;

    spiceExtracted += currentYield;
    startingYield -= 10;
    counterDays++;
  }
  if (spiceExtracted >= 26) {
    spiceExtracted -= 26;
  }
  console.log(counterDays);
  console.log(spiceExtracted);
}
spiceMustFlow(100);
