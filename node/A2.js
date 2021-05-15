var http=require('http');
var fs=require('fs');
var Readstream=fs.createReadStream(__dirname+'/test.txt','utf8');
Readstream.on('data',function(chunk){
    console.log('new chunk received:');
    console.log(chunk);
});