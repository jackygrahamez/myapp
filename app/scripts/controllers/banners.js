'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:BannersCtrl
 * @description
 * # BannersCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('BannersCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
