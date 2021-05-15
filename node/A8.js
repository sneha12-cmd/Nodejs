const fs = require("fs");
const prompt = require("prompt-sync")({ sigint: true });
const num = prompt("Enter a number : ");
let sum = 0;
for (i = 1; i <= num; i++) {
	sum += i;
}
//console.log(`The sum of all integers is ${sum}`);
fs.writeFile("./A8.txt", `The sum of all integers is ${sum}`, () => {
	console.log("File has been updated with the required sum");
});