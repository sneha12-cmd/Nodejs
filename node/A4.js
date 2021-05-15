var http=require('http');
var fs=require('fs');
var Readstream=fs.createReadStream(__dirname+'/reada4.txt','utf8');
var Writestream=fs.createWriteStream(__dirname+'/writea4.txt','utf8');
Readstream.on('data',function(chunk)
{
    
    Writestream.write(chunk);
});