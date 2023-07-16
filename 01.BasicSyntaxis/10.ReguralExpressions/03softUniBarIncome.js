function softUniBarIncome(input) {
  let pattern =
    /%(?<name>[A-Z}[a-z]+)%[^|$%.]*\<(?<product>\w+)\>[^|$%.]*\|(?<quantity>\d+)[^|$%.]*\|(?<price>\d+.?\d*)\$/g;

  let line = input.shift();
  let result = 0;
  while (line !== "end of shift") {
    let match = [...line.matchAll(pattern)];

    for (const el of match) {
      let prices = Number(el.groups.quantity) * Number(el.groups.price);

      result += prices;
      console.log(
        `${el.groups.name}: ${el.groups.product} - ${prices.toFixed(2)}`
      );
    }

    line = input.shift();
  }
  console.log(`Total income: ${result.toFixed(2)}`);
}
softUniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
