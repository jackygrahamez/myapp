'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('MainCtrl', function ($scope) {

    $scope.init = function() {
      setTimeout(function(){
        try {
          if (document.getElementById('module-container')) {
            console.log('running init');
            document.getElementById('module-container').style.width=window.innerWidth - 220;
            document.getElementById('module-full-width-gallery').style.width=window.innerWidth - 221;
            document.getElementById('module-full-width-holder').style.height=window.innerHeight*2+"px";
            document.getElementById('module-full-width-holder').style.overflowY="scroll";
            $scope.subMenu = false;
            $scope.showPreview = false;
          }
        }
        catch (error) {
          console.log(error);
        }
        $('img').click(function(){
          console.log('clicked '+$(this).attr('src'));
          

        });
      }, 500);
    };

    $scope.init();

    $scope.$on('$routeChangeStart', function(next, current) {
      $scope.subMenu = false;
    });

    $scope.$on('$routeChangeStart', function(scope, next, current){
      //console.log('Changing route from '+angular.toJson(current)+' to '+angular.toJson(next));
      $scope.init();
    });

  });
