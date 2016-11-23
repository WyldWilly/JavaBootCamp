// fileio.js - simple file IO (example shows input only...)

/* filesystem library documentation at:
	https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback */


//Require the fs (filesystem) library.
//This library is "built in." No need to fetch with NPM.
var filesys = require("fs")

//read the file into a buffer. A buffer is just a byte array.
filesys.readFile('list.txt', function(err, data) {

	//if we get an error, throw it (ends the application)
	if (err) throw err;
	
	//convert the data array to a String
	var list = data.toString();
	
	/* The listing is permissions #links owner group bytes month day time fname
		we want to print the first and last (permissions and filename) */
	
	//get an array containing the lines of list.text:
	var listlines = list.split('\n')
	
	//string to write to new file
	var out = ""
	
	//for each line, get the permissions and filename and log them out:
	listlines.forEach(function(line) {
	//if not the first line, process the line:
	if (line.length > 20){
		var words = line.split(' ');	//split on whiteSpace
		var perms = words[0];
		var filename = words[words.length - 1];
		out += perms + ' ' + filename + '\n'
	}
    });
	
	//write the file: (dont use this function more than
	//once without waiting for the callback!
	filesys.writeFile('output.txt', out, (err) => {
	if (err) throw err;
	console.log("Writing output.txt");
	});
});

// the function above executes asynchronously
console.log("attempting to read list.txt")
