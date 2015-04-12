/* global app:true */
/* exported app */
'use strict';

app.controller('NavCtrl', function($scope, $location, Post, Auth) {
	// AUTH
    $scope.post = {url: 'http://', title: ''};
    $scope.user = Auth.user;
	$scope.signedIn = Auth.signedIn;
	$scope.logout = Auth.logout;
	
	$scope.post = {url: 'http://', title: ''};

	// SUMBIT POST
	$scope.submitPost = function () {
		// $scope.posts.push($scope.post);
		// $scope.post = {url: 'http://', title:''};
		
		// Post.save($scope.post, function(ref) {
		//	$scope.posts[ref.name] = $scope.post;
		//	$scope.post = {url: 'http://', title:''};
		// });
		
		// Post.create($scope.post).then(function () {
		//	$scope.post = {url: 'http://', title: ''};
		//});
		
		$scope.post.creator = $scope.user.profile.username;
		$scope.post.creatorUID = $scope.user.uid;
		Post.create($scope.post).then(function (ref) {
			$location.path('/posts/' + ref.name());
			$scope.post = {url: 'http://', title: ''};
		});
		
	};
	
});