'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:PrintCtrl
 * @description
 * # PrintCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('PrintCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
