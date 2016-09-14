'use strict';

  function sideNavController($mdSidenav){
    var vm = this;

    vm.openLeftMenu = function() {
        $mdSidenav('left').toggle();
    }
  }
    
angular.module('siteManager',[])
    .controller('sideNavController', sideNavController);