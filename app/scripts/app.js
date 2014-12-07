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
      .when('/animations', {
        templateUrl: 'views/animations.html',
        controller: 'AnimationsCtrl'
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
      .otherwise({
        redirectTo: '/'
      });
  });
