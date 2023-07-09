function censoredWords(text, word) {
//   let result;
//   while (text.includes(word)) {
//     let startIndex = text.indexOf(word);
//     let endIndex = startIndex + word.length;
//     result = text.substring(0, startIndex);
//     result += "*".repeat(word.length);
//     result += text.substring(endIndex);
//     text = result;
//   }

 // console.log(result);
 //let result = text.split(word)
 //console.log(result.join("*".repeat(word.length)));

 let str = "*".repeat(word.length);
 while(text.includes(word)) {
    text = text.replace(word, str)
 }
 console.log(text);
}
censoredWords("A small sentence with some words", "small");
