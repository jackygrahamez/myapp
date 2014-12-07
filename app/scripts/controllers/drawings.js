'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:DrawingsCtrl
 * @description
 * # DrawingsCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('DrawingsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
