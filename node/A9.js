var fs = require('fs');
var text = fs.readFileSync("./A11.txt", 'utf8');
var textByLine = text.split('\n')
console.log(textByLine);