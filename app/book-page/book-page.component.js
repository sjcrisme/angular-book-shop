(function(){
  
'use strict';

function bookPage(){

  bookpageController.$inject = ['AllBooks'];
  function bookpageController(AllBooks){

    var vm = this;
    vm.pageSize = 5;

    AllBooks.query(function(data){

      vm.drupalbooks = data;
      vm.drupalbooksPager = data;
      vm.numberOfPages = Math.ceil(data.length/vm.pageSize);
      vm.currentPage = 0;
     
      vm.goPage = function(index){

        vm.pageStart = 0;
        vm.currentPage = 0;
        if(index != 0){
          vm.currentPage = index;
        }
        vm.pageStart = index*vm.pageSize;
        vm.drupalbooks = data.slice(vm.pageStart);
      }                
    });
   
   //// vm.drupalbooks = AllBooks.query();
    //m.drupalbooks.$promise.then(function(respond){ console.log(respond); })

   /// console.log(vm.drupalbooks.then);
 //   debugger;
//
   vm.currentPage = 0;
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
 })();