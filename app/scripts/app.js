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
	.when('/', {
	  templateUrl: 'views/posts.html',
	  controller: 'PostsCtrl'
	})
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('FIREBASE_URL', 'https://scorching-heat-9226.firebaseio.com/');
