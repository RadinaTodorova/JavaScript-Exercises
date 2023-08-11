function solve(input) {

let pattern = /^![A-Z][a-z]{2,}!:\[[A-Za-z]{8,}\]$/mg;
let n = Number(input.shift());

for (let index = 0; index < n; index++) {
    let current = input[index];
    
    if(pattern.test(current)) {
        let command = current.split(':')[0];
    let commandToUse = command.substring(1, command.length-1);
    let stringToTransform = current.split(':')[1];
      
        let toUse = stringToTransform.substring(1, stringToTransform.length-1);
        let storage = [];
       for (const ch of toUse) {
        let letterIndex = toUse.indexOf(ch);
     
        let toAscii = toUse.charCodeAt(letterIndex);
       storage.push(toAscii);

       }
       console.log(`${commandToUse}: ${storage.join(' ')}`);
    } else {
        console.log('The message is invalid');
    };

}
}
solve((["2",

"!Send!:[IvanisHere]",

"*Time@:[Itis5amAlready"]) );
console.log("---------------------");
solve((["3",

"go:[outside]",

"!drive!:YourCarToACarWash",

"!Watch!:[LordofTheRings]"]));