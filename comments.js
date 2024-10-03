// Create web server that listens on port 3000
// and serves up the comments.html file
// when a user requests the /comments URL.

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  // Read in the file comments.html
  fs.readFile('comments.html', function(err, data) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();
  });
});

// Listen on port 3000, IP defaults to
