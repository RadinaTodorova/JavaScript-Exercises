function repeatString(string, repeat) {
  let result = copyRepeatString(string, repeat);
  return result;

  function copyRepeatString(string, repeat) {
    return string.repeat(repeat);
  }
}

console.log(repeatString("abc", 3));
