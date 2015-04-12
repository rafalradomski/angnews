/* global app:true */
/* exported app */
'use strict';

app.factory('Post', function ($resource) {
	return $resource('https://scorching-heat-9226.firebaseio.com/posts/:id.json');
});