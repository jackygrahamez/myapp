'use strict';

/**
 * @ngdoc service
 * @name myappApp.init
 * @description
 * # init
 * Service in the myappApp.
 */
angular.module('myappApp')
  .service('init', function ($rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    $rootScope.fieldcontainer=document.querySelector('[ng-view]');
    $rootScope.$watch('fieldcontainer', function() {
      if (initializing) {
        $timeout(function() { initializing = false; });
      } else {
        // do whatever you were going to do
        setTimeout(function(){
          console.log('running init');
          document.getElementById('module-container').style.width=window.innerWidth - 220;
          document.getElementById('module-full-width-gallery').style.width=window.innerWidth - 221;
          document.getElementById('module-full-width-holder').style.height=window.innerHeight+"px";
          document.getElementById('module-full-width-holder').style.overflowY="scroll";
        }, 500);
      }
    });


  });
