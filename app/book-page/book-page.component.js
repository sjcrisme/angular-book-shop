(function(){
  
'use strict';

function bookPage(){

  bookpageController.$inject = ['AllBooks'];
  function bookpageController(AllBooks){

    var vm = this;
    vm.pageSize = 5;
    vm.pageStart = 1;

    AllBooks.query(function(data){
      var i;
      vm.drupalbooks = data;
      vm.numberOfPages = Math.ceil(data.length/vm.pageSize);
      vm.currentPage = 1;
     // console.log("number of pages: "+vm.numberOfPages);

      vm.goPage = function(index){
        vm.currentPage = 1;
        if(index != 0){
          vm.currentPage = index;
        }
        console.log("index: "+ index);
        
        vm.drupalbooks = data.slice(index);
      }                
    });
    ///////   console.log(">>"+vm.currentPage);
    
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