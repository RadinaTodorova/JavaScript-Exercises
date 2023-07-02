function storage(input) {
  let storage = {};
  for (const line of input) {
    let [product, quantity] = line.split(" ");
    if (storage.hasOwnProperty(product)) {
      storage[product] += Number(quantity);
    } else {
      storage[product] = Number(quantity);
    }
  }
  for (const key in storage) {
    console.log(`${key} -> ${storage[key]}`);
  }
}
storage(["apple 50", "apple 61", "coffee 115", "coffee 40"]);
