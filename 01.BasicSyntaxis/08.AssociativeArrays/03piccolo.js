function piccolo(data) {
  let parking = {};

  for (const carData of data) {
    let [direction, carNumber] = carData.split(", ");

    if (direction === "IN") {
      parking[carNumber] = carNumber;
    } else if (direction === "OUT") {
      delete parking[carNumber];
    }
  }
  let sorted = Object.keys(parking).sort((a, b) => a.localeCompare(b));
  if (sorted.length === 0) {
    console.log("Parking Lot is Empty");
  } else {
    
    console.log(sorted.join("\n"));
  }
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
