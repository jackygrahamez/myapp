'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:AboutUsCtrl
 * @description
 * # AboutUsCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('AboutUsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
