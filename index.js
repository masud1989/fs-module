const fs = require('fs');
const http = require('http');

const server = http.createServer( function(req, res){
    if(req.url = '/'){
        // asynchronous=======================
        fs.readFile('Home.html', function (error, data){
            res.writeHead(200, {'content-type': 'text/html'})
            res.write(data);
            res.end();
        })
    }

    
})

server.listen(4040);
console.log('Server OK..');