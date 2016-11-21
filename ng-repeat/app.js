angular.module('app', []).controller("MainController", function() {
	this.tasks = [
		{
			name: "Go to grocery",
			done: false
		},
		{
			name: "Walk the dog",
			done: false
		},
		{
			name: "Dinner with boss",
			done: false
		}
	];
});