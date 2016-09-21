'use strict';

  function sideNavController($mdSidenav){
    var vm = this;

    vm.priceInCart = 100;

    vm.openLeftMenu = function() {
        $mdSidenav('left').toggle();
         vm.priceInCart--;
    }
    vm.testButton= function() {
        vm.priceInCart++;
    }

    //
 /*   vm.showActionToast = function() {

      var toast = $mdToast.simple()
        .textContent('You just add book "Drupal How to"')
        .action('UNDO')
        .highlightAction(true)
        .highlightClass('md-accent')// Accent is used by default, this just demonstrates the usage.
        .parent(document.getElementById('toasterplace'))
        .position('top right');

        $mdToast.show(toast).then(function(response) {
          if ( response == 'ok' ) {
            console.log('You clicked the \'UNDO\' action.');
          }
        });
    };

    vm.closeToast = function() {
      $mdToast.hide();
    };*/
  }
    
angular.module('siteManager',[])
    .controller('sideNavController', sideNavController);