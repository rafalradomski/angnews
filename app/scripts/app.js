/* global app:true */
/* exported app */
'use strict';

/**
 * @ngdoc overview
 * @name angNewsApp
 * @description
 * # angNewsApp
 *
 * Main module of the application.
 */
var app = angular
  .module('angNewsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
	.when('/login', {
	  templateUrl: 'views/login.html',
	  controller: 'AuthCtrl',
	  resolve: {
		user: function(Auth) {
		  return Auth.resolveUser();
		}
	  }
	})
	.when('/register', {
	  templateUrl: 'views/register.html',
	  controller: 'AuthCtrl',
	  resolve: {
		user: function(Auth) {
		  return Auth.resolveUser();
		}
	  }
	})
	.when('/', {
	  templateUrl: 'views/posts.html',
	  controller: 'PostsCtrl'
	})
    .when('/posts/:postId', {
      templateUrl: 'views/showpost.html',
      controller: 'PostViewCtrl'
    })
	.when('/users/:userId', {
	  templateUrl: 'views/profile.html',
	  controller: 'ProfileCtrl'
	})
	.otherwise({
	redirectTo: '/'
	});
  })
  .constant('FIREBASE_URL', 'https://scorching-heat-9226.firebaseio.com/');
