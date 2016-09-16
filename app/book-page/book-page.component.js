(function(){
  
'use strict';

function bookPage(){

  function bookpageController(){
    var vm = this;
    vm.text = " AAA AAA A ";
    }

    return {
      replace:true,
      transclude:true,
    //  template:"<div>BOOK PAGE module</b> >>> {{myctrl.text}} --  <p ng-transclude></p></div>",
      templateUrl:'/book-page/book-page.template.html',
      controller: bookpageController,
      controllerAs:'myctrl'
    }
}



angular.module('bookPage',[])
.component('bookPage',bookPage());
 //   .controller('bookpageController', bookpageController);

 })();