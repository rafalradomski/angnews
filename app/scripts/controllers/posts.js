/* global app:true */
/* exported app */
'use strict';

app.controller('PostsCtrl', function ($scope, $location, Post, Auth ) {
	// $scope.posts = [];
	//$scope.posts = Post.get();
	$scope.posts = Post.all;
	$scope.user = Auth.user;
	
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