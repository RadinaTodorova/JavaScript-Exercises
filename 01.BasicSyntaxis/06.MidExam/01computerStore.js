function computerStore(data) {
  let sumWithoutVat = 0;
  let command = data.pop();
  let sum = 0;
  if (data.length === 0) {
    return console.log("Invalid order!");
  }

  for (let index = 0; index < data.length; index++) {
    let price = Number(data[index]);
    if (price <= 0) {
        console.log('Invalid price!');
    } else {
        sumWithoutVat += price;
    }
  }
  if(sumWithoutVat === 0) {
    return console.log("Invalid order!");
  }
let taxes = sumWithoutVat * 0.2;
  if (command === 'regular') {
    sum = sumWithoutVat + taxes;
  } else if (command === 'special') {
    sum = (sumWithoutVat + taxes)* 0.9;
  } else {
   return console.log("Invalid order!");
  }
  console.log(`Congratulations you've just bought a new computer!`);
  console.log(`Price without taxes: ${sumWithoutVat.toFixed(2)}$`);
  console.log(`Taxes: ${taxes.toFixed(2)}$`);
  console.log("-----------");
  console.log(`Total price: ${sum.toFixed(2)}$`);
}

computerStore(([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])
    );
