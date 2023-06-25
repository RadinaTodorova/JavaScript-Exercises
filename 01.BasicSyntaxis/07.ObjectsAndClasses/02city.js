function city(inputObject) {
  for (const key in inputObject) {
    console.log(`${key} -> ${inputObject[key]}`);
  }
}

city({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
