'use strict';

/**
 * @ngdoc function
 * @name webnotes2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webnotes2App
 */
angular.module('webnotes2App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
