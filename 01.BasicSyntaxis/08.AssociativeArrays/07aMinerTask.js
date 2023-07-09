function minerTask(input) {
  let resources = {};

  for (let index = 0; index < input.length; index += 2) {
    let resource = input[index];
    let quantity = Number(input[index + 1]);

    if (resources[resource]) {
      resources[resource] += quantity;
    } else {
      resources[resource] = quantity;
    }
  }
  for (const resource in resources) {
    console.log(`${resource} -> ${resources[resource]}`);
  }
}
minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
