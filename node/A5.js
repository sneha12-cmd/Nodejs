var fs=require('fs');
var filename='some.txt'
var wordtofind=process.argv[2].toLowerCase();

fs.readFile(filename,'utf8',function(err,contentFile){
    if(err)throw err;
    var aWordsText=contentFile.toLowerCase().split(' ');
    var aFIlteredWords=aWordsText.filter(function(word){
        return word.includes(wordtofind);
    })
    console.log('The word"'+wordtofind+'"appears'+aFIlteredWords.length+"times in the text.");
});