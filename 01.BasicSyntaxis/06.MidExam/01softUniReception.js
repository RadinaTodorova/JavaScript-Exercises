function softUniReception(input) {
  let firstEmPloyeePerHour = Number(input[0]);
  let secondEmployeePerHour = Number(input[1]);
  let thirsdEmployeePerHour = Number(input[2]);
  let allCustomers = Number(input[3]);
  let hoursNeed = 0;
  while (allCustomers >= 0) {
    hoursNeed++;

    if (hoursNeed % 4 === 0) {
      allCustomers = allCustomers;
    } else {
      allCustomers -=
        firstEmPloyeePerHour + secondEmployeePerHour + thirsdEmployeePerHour;
    }

    if (allCustomers <= 0) {
      break;
    }
  }
  console.log(`Time needed: ${hoursNeed}h.`);
}
softUniReception(["1", "2", "3", "45"]);
softUniReception(["5", "6", "4", "20"]);
softUniReception(["3", "2", "5", "40"]);
