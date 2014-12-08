'use strict';

/**
 * @ngdoc service
 * @name myappApp.init
 * @description
 * # init
 * Service in the myappApp.
 */
angular.module('myappApp')
  .service('init', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    $('#module-full-width-gallery').css('height', $(window).height());
  });
