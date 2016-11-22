angular.module('app', []).controller("MainController", function() {

	this.items = [
		{
			name: "Book",
			price: "5.95"
		},
		{
			name: "Mint",
			price: ".15"
		},	
		{
			name: "Printer",
			price: "240"
		},
		{
			name: "Thing",
			price: ""
		},
		{
			name: "Wisdom",
			price: "Priceless"
		},		
	];
});