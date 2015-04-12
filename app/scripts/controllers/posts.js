/* global app:true */
/* exported app */
'use strict';

app.controller('PostsCtrl', function ($scope, Post) {
	// $scope.posts = [];
	$scope.posts = Post.get();
	$scope.post = {url: 'http://', title: ''};

	// Submit post
	$scope.submitPost = function () {
		// $scope.posts.push($scope.post);
		// $scope.post = {url: 'http://', title:''};
		
		Post.save($scope.post, function(ref) {
			$scope.posts[ref.name] = $scope.post;
			$scope.post = {url: 'http://', title:''};
		});
		
	};
	
	// Delete post
	// $scope.deletePost = function (index) {
	//	$scope.posts.splice(index, 1);
	// };
	$scope.deletePost = function(postId) {
		Post.delete({id: postId}, function() {
			delete $scope.posts[postId];
		});
	};
	
	
});