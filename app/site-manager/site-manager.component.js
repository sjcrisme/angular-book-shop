'use strict';

  function sideNavController($mdSidenav,ShopCart){
    var vm = this;
    window.getTotal  = vm.getTotal = ShopCart.getTotal.bind(ShopCart);
    window.getBooks  = vm.getBooks = ShopCart.getBooks.bind(ShopCart);

  //  vm.getTotal = Invoice;
   
    vm.openLeftMenu = function() {
        $mdSidenav('left').toggle();
      //vm.priceInCart--;
   //  Invoice.refresh();
    //  vm.priceInCart = ShopCart.getTotal();
     
    }
    vm.testButton= function() {
      
    }

  }
  function additemshopcart($mdSidenav,ShopCart){
    var vm = this;
     vm.addmore = function(id){
       ShopCart.IncreasBookCount(id);
       vm.tottal = ShopCart.tottal;
     }
     vm.removeone = function(id){
        ShopCart.DecreasBookCount(id);
        vm.tottal = ShopCart.tottal;
     }
  }
    
angular.module('siteManager',['core'])
    .controller('sideNavController', sideNavController)
    .controller('additemshopcart',additemshopcart);