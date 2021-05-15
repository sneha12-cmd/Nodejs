var http=require('http');
var server=http.createServer(function(req,res)
{

    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('hey');
}

);

server.listen(3001,'127.0.0.1');
console.log("success,i'm listening from 3001");