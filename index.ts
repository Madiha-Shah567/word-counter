#! /usr/bin/env node

import inquirer from "inquirer"

const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message:"Enter your sentence to count the word:"
    }
])

const words = answers.Sentence.trim().split(/\s+/) 

console.log(words);


// Additional features
console.log (`Your sentence word count is ${words.length}`);

console.log("1. Uppercase sentence:", answers.Sentence.toUpperCase());
console.log("2. Lowercase sentence:", answers.Sentence.toLowerCase());
console.log("3. Sentence length (including spaces):", answers.Sentence.length);
console.log("4. Sentence length (excluding spaces):", answers.Sentence.replace(/\s/g, '').length);

let arreangedWords= words.join(" ").toLocaleLowerCase()
let count:number= 0;
for(const char of arreangedWords){
    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
        count++
    }
}
console.log(`5. The number of vowels in your sentence is: ${count}`)





