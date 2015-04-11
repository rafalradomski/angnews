'use strict';

app.controller('PostsCtrl', function ($scope) {
	$scope.posts = [];
	$scope.post = {url: 'http://', title: ''};
});