function employees(data) {
  let employee = {};

  for (const name of data) {
    employee[name] = name.length;
  }
  for (const key of Object.keys(employee)) {
    console.log(`Name: ${key} -- Personal Number: ${employee[key]}`);
  }
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
