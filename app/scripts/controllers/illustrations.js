'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:IllustrationsCtrl
 * @description
 * # IllustrationsCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('IllustrationsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
