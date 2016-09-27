(function(){
  
'use strict';

function bookPage(){

  bookpageController.$inject = ['AllBooks','$mdDialog','ShopCart','$mdToast'];
  function bookpageController(AllBooks,$mdDialog,ShopCart,$mdToast){

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
//
          vm.showActionToast = function(name,price,id) {

            var toast = $mdToast.simple()
              .textContent(name + ' + ' + price + ' USD')
              .action('UNDO')
              .highlightAction(true)
              .highlightClass('md-accent')// Accent is used by default, this just demonstrates the usage.
              .parent(document.getElementById('toasterplace'))
              .position('top right');

              $mdToast.show(toast).then(function(response) {
                if ( response == 'ok' ) {
                  ShopCart.Undo(id);
             //     console.log('You \'UNDO\' book id:'+ id +' action.');
                }
              });
          };
//
          vm.closeToast = function() {
            $mdToast.hide();
          }
          //
         vm.openBook = function(ev,book){
           DialogController.$inject = ['$mdDialog','locals','ShopCart'];
           function DialogController($mdDialog,locals,ShopCart) {
                 var vmDialog = this;
                 vmDialog.book = locals.book;

                 vmDialog.closeDialog = function(answer) {
                     ShopCart.addBook({
                         id:this.book.id,
                         name:this.book.name,
                         desc:this.book.description,
                         img:this.book.img,
                         countThisBook:1,
                         price:this.book.price
                     });
                     $mdDialog.hide(answer);
                     vm.showActionToast(book.name,book.price,book.id);
                 }
                 vmDialog.answer = function(answer) {
           //          console.log('> '+ answer);
                     $mdDialog.hide(answer);
                 }
            }
            $mdDialog.show({
                 clickOutsideToClose: true,
                 preserveScope: true,  // do not forget this if use parent scope
                 templateUrl: 'book-page/BookDialog.tmpl.html',
                 controller: DialogController,
                 controllerAs:'vmDialog',
                 locals:{book:book},
                 parent: angular.element(document.body),
                 targetEvent: ev
            }).then(function(answer) {
                    vm.status = 'Last added to shopcart book: "' + answer + '".';
             }, function() {
                    vm.status = 'You cancelled the dialog.';
            });
        }
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