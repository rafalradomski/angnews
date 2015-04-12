/* global app:true */
/* exported app */
'use strict';

app.controller('PostsCtrl', function ($scope, Post) {
	// $scope.posts = [];
	
	//$scope.posts = Post.get();
	
	$scope.posts = Post.all;
	
	$scope.post = {url: 'http://', title: ''};

	// SUMBIT POST
	$scope.submitPost = function () {
		// $scope.posts.push($scope.post);
		// $scope.post = {url: 'http://', title:''};
		
		// Post.save($scope.post, function(ref) {
		//	$scope.posts[ref.name] = $scope.post;
		//	$scope.post = {url: 'http://', title:''};
		// });
		
		Post.create($scope.post).then(function () {
			$scope.post = {url: 'http://', title: ''};
		});
	};
	
	// DELETE POST
	// $scope.deletePost = function (index) {
	//	$scope.posts.splice(index, 1);
	// };
	
	// $scope.deletePost = function(postId) {
	//	Post.delete({id: postId}, function() {
	//		delete $scope.posts[postId];
	//	});
	// };
	
	$scope.deletePost = function (post) {
			Post.delete(post);
	};
	
});