function towns(data) {
  let city = {
    town: " ",
    latitude: 0,
    longitude: 0,
  };
  for (let i = 0; i < data.length; i++) {
    let [town, latitude, longitude] = data[i].split(" | ");
    city["town"] = town;
    city["latitude"] = Number(latitude).toFixed(2);
    city["longitude"] = Number(longitude).toFixed(2);
    console.log(city);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
