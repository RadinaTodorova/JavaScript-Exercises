function solve(input) {
  let currentPassword = input.shift();

  for (const line of input) {
    if (line === "Complete") {
      break;
    }
    let token = line.split(' ');
    let action = token[0];

    switch (action) {
      case "Make":
        let command = token[1];
        let index = Number(token[2]);
if(index >= 0 && index < currentPassword.length) {
        if (command === "Upper") {
          let letter = currentPassword[index].toUpperCase();

          let leftSide = currentPassword.substring(0, index);
          let rightSIde = currentPassword.substring(index + 1);
          currentPassword = leftSide + letter + rightSIde;

          console.log(currentPassword);
        }
        }
        if (command === "Lower") {
            if(index >= 0 && index < currentPassword.length) {
          let letterToLower = currentPassword[index].toLowerCase();
          let leftSide = currentPassword.substring(0, index);
          let rightSIde = currentPassword.substring(index + 1);
          currentPassword = leftSide + letterToLower + rightSIde;
          console.log(currentPassword);
            }
        }

        break;
      case "Insert":
        let indexToInsert = Number(token[1]);
        let charToInsert = token[2];
        if (indexToInsert >= 0 && indexToInsert < currentPassword.length) {
          let leftSide = currentPassword.substring(0, indexToInsert);
          let rightSIde = currentPassword.substring(indexToInsert);
          currentPassword = leftSide + charToInsert + rightSIde;
          console.log(currentPassword);
        }

        break;
      case "Replace":
        let charToReplace = token[1];
        if (currentPassword.includes(charToReplace)) {
          let value = Number(token[2]);
          let indexOfChar = currentPassword.indexOf(charToReplace);
    
          let converted = currentPassword.charCodeAt(indexOfChar);
          
          let newValue = Number(converted) + value;
        
        let toReplace = String.fromCharCode(newValue);
          while (currentPassword.includes(charToReplace)) {
            currentPassword = currentPassword.replace(
              charToReplace,
              toReplace
            );
          }
          console.log(currentPassword);
        }
        break;
      case "Validation":
        let pattern = /^[A-Za-z0-9_]+$/;
        if (currentPassword.length < 8) {
          console.log("Password must be at least 8 characters long!");
        }
        if (!pattern.test(currentPassword)) {
          console.log(`Password must consist only of letters, digits and _!`);
        }
        if (isUpper(currentPassword) !== true) {
          console.log(`Password must consist at least one uppercase letter!`);
        }
        if (isLower(currentPassword) !== true) {
          console.log(`Password must consist at least one lowercase letter!`);
        }
        if (hasNumber(currentPassword) !== true) {
          console.log("Password must consist at least one digit!");
        }
        break;
      default:
        break;
    }
  }
  function isUpper(input) {
    for (let ch of input) {
      if ((ch = ch.toUpperCase() && ch !== ch.toLowerCase())) {
        return true;
      }
    }
    return false;
  }
  function isLower(input) {
    for (let ch of input) {
      if ((ch = ch.toLowerCase() && ch !== ch.toUpperCase())) {
        return true;
      }
    }
    return false;
  }
  function hasNumber(input) {
    for (let ch of input) {
      if (!isNaN(Number(ch))) {
        return true;
      }
    }
    return false;
  }
}
solve(['invalidpassword*',

'Add 2 p',

'Replace i -50',

'Replace * 10',

'Make Upper 2',

'Validation',

'Complete']);


