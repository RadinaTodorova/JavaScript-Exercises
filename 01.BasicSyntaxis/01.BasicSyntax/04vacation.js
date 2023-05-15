function vacation(peopleCount, typeOfGroup, dayOfWeek) {
  let price = 0;
  let allPrice = 0;

  switch (typeOfGroup) {
    case "Students":
      if (dayOfWeek === "Friday") {
        price = 8.45;
      } else if (dayOfWeek === "Saturday") {
        price = 9.8;
      } else if (dayOfWeek === "Sunday") {
        price = 10.46;
      }
      allPrice = price * peopleCount;
      if (peopleCount >= 30) {
        allPrice = allPrice * 0.85;
      }
      break;
    case "Business":
      if (dayOfWeek === "Friday") {
        price = 10.9;
      } else if (dayOfWeek === "Saturday") {
        price = 15.6;
      } else if (dayOfWeek === "Sunday") {
        price = 16;
      }
      allPrice = price * peopleCount;
      if (peopleCount >= 100) {
        allPrice = allPrice - price * 10;
      }

      break;
    case "Regular":
      if (dayOfWeek === "Friday") {
        price = 15;
      } else if (dayOfWeek === "Saturday") {
        price = 20;
      } else if (dayOfWeek === "Sunday") {
        price = 22.5;
      }
      allPrice = price * peopleCount;
      if (peopleCount >= 10 && peopleCount <= 20) {
        allPrice = allPrice * 0.95;
      }

      break;
  }

  console.log(`Total price: ${allPrice.toFixed(2)}`);
}
vacation(40, "Regular", "Saturday");
