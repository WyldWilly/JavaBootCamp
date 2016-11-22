// fileio.js - simple file IO (example shows input only...)

//Require the fs (filesystem) library.
//This library is "built in." No need to fetch with NPM.
var filesys = require("fs")

//read the file into a buffer. A buffer is just a byte array.
filesys.readFile('list.txt', function(err, data) {

	//if we get an error, throw it (ends the application)
	if (err) throw err;
	
	//convert the data array to a String
	var list = data.toString();
	
	//log out the list:
	console.log(list);
});

// the function above executes asynchronously
console.log("attempting to read list.txt")
