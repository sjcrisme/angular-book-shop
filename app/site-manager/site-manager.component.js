'use strict';

  function sideNavController($mdSidenav,$mdDialog,ShopCart){
    var vm = this;
    window.getTotal  = vm.getTotal = ShopCart.getTotal.bind(ShopCart);
    window.getBooks  = vm.getBooks = ShopCart.getBooks.bind(ShopCart);

  //  vm.getTotal = Invoice;
   
    vm.openLeftMenu = function() {
        $mdSidenav('left').toggle();
   //  vm.priceInCart--;
   //  Invoice.refresh();
   //  vm.priceInCart = ShopCart.getTotal();
    }
    vm.checkout_popup = function(ev) {

       $mdDialog.show({
          controller: DialogTabController,
          templateUrl: 'site-manager/tabDialog.tmpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true
        })
        .then(function(answer) {
          vm.status = 'You said the information was "' + answer + '".';
        }, function() {
          vm.status = 'You cancelled the dialog.';
        });

        function DialogTabController(){

        }
    }

    
  }
  function additemshopcart($mdSidenav,$mdDialog,ShopCart){
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