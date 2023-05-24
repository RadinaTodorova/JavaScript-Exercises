function passwordValidator(password) {
  let hasValidLength = validateLength(password);
  let hasValidNonSpecialChar = validateNonSpecialChar(password);
  let hasValidDigit = checkForTwoNumbers(password);
  printResult(hasValidLength, hasValidNonSpecialChar, hasValidDigit);

  function validateLength(password) {
    return password.length >= 6 && password.length <= 10;
  }

  function validateNonSpecialChar(text) {
    for (const char of text) {
      let num = char.charCodeAt(0);
      let isLower = checkCharForLowerCase(num);
      let isUpper = checkCharForUpperCase(num);
      let isNumber = checkNumber(num);
      if (!isLower && !isUpper && !isNumber) {
        return false;
      }
    }
    return true;
  }

  function checkNumber(num) {
    return num >= 48 && num <= 57;    
  }

  function checkCharForUpperCase(num) {
    return num >= 65 && num <= 90;
  }

  function checkCharForLowerCase(num) {
    return num >= 97 && num <= 122;
  }

  function checkForTwoNumbers(password) {
    let counter = 0;
    for (const ch of password) {
      let isNumber = checkNumber(ch.charCodeAt(0));
      if (isNumber) {
        counter++;
      }
    }
    return counter >= 2
  }
  function printResult(validLength, validSymbol, validDigit) {
    if (!validLength) {
      console.log("Password must be between 6 and 10 characters");
    }
    if (!validSymbol) {
      console.log("Password must consist only of letters and digits");
    }
    if (!validDigit) {
      console.log("Password must have at least 2 digits");
    }
    if (validDigit && validLength && validSymbol) {
      console.log("Password is valid");
    }
  }
}
passwordValidator("MyPass123");
