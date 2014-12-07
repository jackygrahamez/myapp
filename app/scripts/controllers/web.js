'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:WebCtrl
 * @description
 * # WebCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('WebCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
