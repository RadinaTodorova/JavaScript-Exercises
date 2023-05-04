function solve(missingWord, char, matchWord) {
let newWord = missingWord.replace('_',char);
if (matchWord === newWord) {
    console.log('Matched'); 
} else {
    console.log('Not Matched');
}
// let output = matchWord === newWord? 'Matched': 'Not Matched';
}
solve('Str_ng', 'I', 'Strong');