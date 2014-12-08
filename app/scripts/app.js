'use strict';

/**
 * @ngdoc overview
 * @name myappApp
 * @description
 * # myappApp
 *
 * Main module of the application.
 */
angular
  .module('myappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/about_us.html',
        controller: 'AboutUsCtrl'
      })
      .when('/about_us', {
        templateUrl: 'views/about_us.html',
        controller: 'AboutUsCtrl'
      })
      .when('/banners', {
        templateUrl: 'views/banners.html',
        controller: 'BannersCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/drawings', {
        templateUrl: 'views/drawings.html',
        controller: 'DrawingsCtrl'
      })
      .when('/illustrations', {
        templateUrl: 'views/illustrations.html',
        controller: 'IllustrationsCtrl'
      })
      .when('/paintings', {
        templateUrl: 'views/paintings.html',
        controller: 'PaintingsCtrl'
      })
      .when('/print', {
        templateUrl: 'views/print.html',
        controller: 'PrintCtrl'
      })
      .when('/web', {
        templateUrl: 'views/web.html',
        controller: 'WebCtrl'
      })
      .when('/2D_animations', {
        templateUrl: 'views/2d_animations.html',
        controller: '2dAnimationsCtrl'
      })
      .when('/3D_animations', {
        templateUrl: 'views/3d_animations.html',
        controller: '3dAnimationsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .directive('resize', function ($window) {
    return function (scope, element) {
      var w = angular.element($window)[0];
      console.dir(w);
      scope.getWindowDimensions = function () {
        return { 'h': w.height(), 'w': w.width() };
      };
      scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
        scope.windowHeight = newValue.h;
        scope.windowWidth = newValue.w;

        scope.style = function () {
          return {
            'height': (newValue.h - 100) + 'px',
            'width': (newValue.w - 100) + 'px'
          };
        };

      }, true);

      w.bind('resize', function () {
        scope.$apply();
      });
    }
  });
