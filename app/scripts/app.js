/* global app:true */
/* exported app */
'use strict';

/**
 * @ngdoc overview
 * @name webnotes2App
 * @description
 * # webnotes2App
 *
 * Main module of the application.
 */
var app = angular
  .module('webnotes2App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
  });
