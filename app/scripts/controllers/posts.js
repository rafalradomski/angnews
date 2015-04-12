/* global app:true */
/* exported app */
'use strict';

app.controller('PostsCtrl', function ($scope) {
	$scope.posts = [];
	$scope.post = {url: 'http://', title: ''};

	/* Submit post */
	$scope.submitPost = function () {
		$scope.posts.push($scope.post);
		$scope.post = {url: 'http://', title:''};
	};
	
	/* Delete post */
	$scope.deletePost = function (index) {
		$scope.posts.splice(index, 1);
	};
});