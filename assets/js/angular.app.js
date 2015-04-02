var tyrex = angular.module('tyrex', []); // Defines an angular module

tyrex.controller('homeController',function($scope,$http,$log){
	$scope.title = "Tyrex"
	$scope.description = "Mozilla Kerala Portal"
});