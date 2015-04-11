'use strict';

/**
 * @ngdoc function
 * @name webnotes2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webnotes2App
 */
angular.module('webnotes2App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
