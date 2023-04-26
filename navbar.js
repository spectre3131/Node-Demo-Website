let http = require('http');
let fs = require('fs');
let url = require('url');

http.createServer(function(req, res) {
    let q = url.parse(req.url, true);
    let filename = '.' + q.pathname;
    if( filename == './') {
        filename = './wlc';
    }
    filename = filename + '.html';
    fs.readFile(filename, function(err, data) {
        if(err) {
            res.writeHead(404, {'Content-Type':'text/html'});
            return res.write('<center><h1> 404 Not Found </h1></center>');
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });
}).listen(3110);


console.log('Server Listening on PORT:3110...');