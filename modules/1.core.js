//Create we server

const http=require('http')
http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'})
    response.end("Hello world,welcome to node js")
}).listen(6060)