(function(){
  
'use strict';

function bookPage(){

  bookpageController.$inject = ['AllBooks'];
  function bookpageController(AllBooks){
    
    var vm = this;
    vm.text = " AAA AAA A ";
    vm.drupalbooks = AllBooks.query();
    }

    return {
      replace:true,
      transclude:true,
    //  template:"<div>BOOK PAGE module</b> >>> {{myctrl.text}} --  <p ng-transclude></p></div>",
      templateUrl:'/book-page/book-page.template.html',
      controller: bookpageController,
      controllerAs:'bookObj'
    }
}

angular.module('bookPage',['core'])
.component('bookPage',bookPage());
 //   .controller('bookpageController', bookpageController);

 })();