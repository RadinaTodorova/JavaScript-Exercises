function pascalCaseSplitter(string) {
    let result = string[0];
    for (let i = 1; i < string.length; i++) {
        if(string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90) {
            result += ", "
        }
        result += string[i];
    }
    console.log(result);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');