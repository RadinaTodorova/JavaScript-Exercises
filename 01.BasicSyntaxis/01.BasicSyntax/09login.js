function login(input) {
  let userName = input[0];

  let correctPassword = [...userName].reverse().join("");
  let counter = 1;

  for (let i = 1; i <= input.length; i++) {
    let tempPassword = input[i];

    if (tempPassword === correctPassword) {
      console.log(`User ${userName} logged in.`);
      break;
    } else if (counter === 4) {
      console.log(`User ${userName} blocked!`);
      break;
    } else {
      console.log("Incorrect password. Try again.");
      counter++;
    }
  }
}
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
