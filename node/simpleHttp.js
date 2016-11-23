//hello world in node.js
var http = require("http");

http.createServer(function (req, res) {

	// Send header, status, and mime type
	res.writeHead(200, {'Content-Type': 'text/html'});
	// Send the response:
	res.write('<h3>Hello, Node!</h3>');
	res.write('<p>Mary had a little lamb<br />');
	res.write('its fleece was white as snow.<br/>');
	res.write('And everywhere that Mary went,<br/>');
	res.write('the lamb was sure to go.</p>');
	res.end();
	
}).listen(8080); //listen on port 8080

//log the server is running
console.log('Server running: http://127.0.0.1:8080/');


