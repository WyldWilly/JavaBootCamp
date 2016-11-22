//hello world in node.js
var http = require("http");

http.createServer(function (req, res) {

	//Send header, status, and mime type:
	res.writeHead(200, {'Content-Type': 'text/html'});
	//Send the response
	res.end('<h3>Hello, Node!</h3>\n');
	
}).listen(8080); //Listen on port 8080

//log the server is running:
console.log('Server running: http://127.0.0.1:8080/');