function phoneShop(input) {
  let listOfPhones = input.shift().split(", ");

  for (let i = 0; i < input.length; i++) {
    let tokens = input[i].split(" - ");
    let command = tokens[0];
    
    switch (command) {
      case "Add":
        let phone = tokens[1];

        if(listOfPhones.includes(phone) === false) {
            listOfPhones.push(phone);
        }
        break;
      case "Remove":
        let phoneToRemove = tokens[1];

        if(listOfPhones.includes(phoneToRemove)) {
            let phoneIndex = listOfPhones.indexOf(phoneToRemove);         
           listOfPhones.splice(phoneIndex,1);
        }
        break;
      case "Bonus phone":
        let oldPhone = tokens[1].split(':')[0];
        let newPhone = tokens[1].split(':')[1];
     
         if(listOfPhones.includes(oldPhone)) {
            let oldPhoneIndex = listOfPhones.indexOf(oldPhone);         
           listOfPhones.splice(oldPhoneIndex + 1, 0, newPhone);
         }
        break;
      case "Last":

      let phoneToMove = tokens[1];

      if(listOfPhones.includes(phoneToMove)) {
          let phoneToMoveIndex = listOfPhones.indexOf(phoneToMove);         
       let move = listOfPhones.splice(phoneToMoveIndex,1)[0]; 
       listOfPhones.push(move);
      }
        break;
      case "End":
        console.log(listOfPhones.join(', '));
        break;
    }
  }
}
// phoneShop([
//   "SamsungA50, MotorolaG5, IphoneSE",

//   "Add - Iphone10",

//   "Remove - IphoneSE",

//   "End",
// ]);
console.log("----------------");
// phoneShop([
//   "HuaweiP20, XiaomiNote",

//   "Remove - Samsung",

//   "Bonus phone - XiaomiNote:Iphone5",

//   "End",
// ]);
console.log("----------------");
phoneShop([
  "SamsungA50, MotorolaG5, HuaweiP10",

  "Last - SamsungA50",

  "Add - MotorolaG5",

  "End",
]);
