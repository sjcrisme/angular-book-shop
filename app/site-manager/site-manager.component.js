'use strict';

  function sideNavController($mdSidenav,ShopCart){
    var vm = this;
    window.getTotal  = vm.getTotal = ShopCart.getTotal.bind(ShopCart);

  //  vm.getTotal = Invoice;
   
    vm.openLeftMenu = function() {
        $mdSidenav('left').toggle();
      //vm.priceInCart--;
   //  Invoice.refresh();
    //  vm.priceInCart = ShopCart.getTotal();
     
    }
    vm.testButton= function() {
      //  vm.priceInCart++;
    }

  }
    
angular.module('siteManager',['core'])
    .controller('sideNavController', sideNavController);