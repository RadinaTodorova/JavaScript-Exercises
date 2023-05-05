function solve(letter) {
let letterASCIITable = letter.charCodeAt();

if (letterASCIITable >= 65 && letterASCIITable <= 90) {
    console.log('upper-case');
} 

if (letterASCIITable >= 97 && letterASCIITable <= 122) {
    console.log('lower-case');
}

}
solve('f');