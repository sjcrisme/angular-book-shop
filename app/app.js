'use strict';

angular.module('MyApp', [
    'ngMaterial',
 ]).config(function($mdThemingProvider) {
   $mdThemingProvider
            .theme('default')
            .primaryPalette('blue-grey', {
                'default': '900',
                'hue-2': '500'
            })
            .backgroundPalette('blue-grey', {
                'default': '200'
            })
            .accentPalette('deep-purple');
});

/** 
 angular
  .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  .controller('AppCtrl', function ($scope, $timeout, $mdSidenav) {
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
    }
  });
*/