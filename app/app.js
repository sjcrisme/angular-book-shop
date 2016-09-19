'use strict';

angular.module('MyApp', [
    'ngMaterial',
    'core',
    'siteManager',
    'bookPage',
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
