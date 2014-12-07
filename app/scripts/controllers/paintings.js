'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:PaintingsCtrl
 * @description
 * # PaintingsCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('PaintingsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
