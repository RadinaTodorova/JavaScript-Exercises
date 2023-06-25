function inventory(data) {
  let allHeroes = [];
  for (let i = 0; i < data.length; i++) {
    let [name, level, items] = data[i].split(" / ");
    let hero = {
      name: name,
      level: level,
      items: items,
    };
    allHeroes.push(hero);
  }
  allHeroes.sort((a, b) => a.level - b.level);

  for (const hero of allHeroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
