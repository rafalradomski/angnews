/* global app:true */
/* exported app */
'use strict';

app.controller('AuthCtrl', function ($scope, $location, Auth, user) {
	// IS LOGIN
	if(user) {
		$location.path('/');		
	}
	
	// LOGIN
	$scope.login = function () {
		Auth.login($scope.user).then(function () {
			$location.path('/');
		}, function (error) {
		  $scope.error = error.toString();
		});
	};
	
	// REGISTER
	$scope.register = function () {
		Auth.register($scope.user).then( function () {
			return Auth.login($scope.user).then( function () {
				$location.path('/');
			});			
		}, function(error) {
		  $scope.error = error.toString();
		});
	};
  
});