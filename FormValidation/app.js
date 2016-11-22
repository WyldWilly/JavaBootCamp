var app = angular.module('app', []);

app.controller("FormController", function() {
	this.submitForm = function() {
		// do something useful with the form data here....
		console.log("Form submitted...")
	};
});
