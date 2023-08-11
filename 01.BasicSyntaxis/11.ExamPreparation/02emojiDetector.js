function emojiDetector(input) {

    input = input.shift();                         

    let emojiPattern = /(:{2}|\*{2})(?<emojiName>[A-Z][a-z]{2,})\1/g;
   
    let digitsPattern = /\d/g;                      
    let coolTreshold = 1;                           
    let matchNumber = digitsPattern.exec(input);    
    let emojis = [];                                
    let emojiMatch = emojiPattern.exec(input);      
    let countOfEmojis = 0;                          
    while (matchNumber !== null) {                  
        coolTreshold *= Number(matchNumber[0]);     
        matchNumber = digitsPattern.exec(input);    
    }

    while (emojiMatch !== null) {                  
        countOfEmojis++;                            
        let emojiName = emojiMatch.groups.emojiName;          
        let sumLetters = 0;                         

        for (let letter of emojiName) {                 
            sumLetters += letter.charCodeAt();      
        }

        if (sumLetters > coolTreshold) {           
            emojis.push(emojiMatch[0]);             
        }
        emojiMatch = emojiPattern.exec(input);      
    }

    console.log(`Cool threshold: ${coolTreshold}`);
    console.log(`${countOfEmojis} emojis found in the text. The cool ones are:`);   
    console.log(emojis.join("\n"));    
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);