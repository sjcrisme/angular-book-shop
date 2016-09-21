'use strict';

var app = angular.module('core', ['ngResource']);
/*
app.factory('AllBooks', ['$resource',
    function($resource) {
      return $resource('core/books.json', {}, {
        query: {
          method: 'GET',
          params: {books: 'books'},
          isArray: true
        }
      });
    }
  ]);*/
  
    var my = function($resource) {
      return $resource('core/books.json');
  }
  app.factory('AllBooks',my);

//
  app.factory('ShopCart',function(){

    var shopData = {};
    shopData.array_elements = [];
    shopData.tottal = 0;
    shopData.addBook = function(elemnt){
        if(this.array_elements.length == 1){
            if(this.array_elements[0].id == elemnt.id){
                this.array_elements[0].countThisBook++;
            }
            else{
                this.array_elements.push(elemnt);
            }
            this.tottal = this.tottal + this.array_elements[0].price;     
        }
        else {
            var i,founditem = false;
            for(i=0; i < this.array_elements.length; i++){
                if (this.array_elements[i].id == elemnt.id){
                    this.array_elements[i].countThisBook++;
                    //this.array_elements[i].tottal = this.array_elements[i].tottal + this.array_elements[i.price];
                    this.tottal = this.tottal + this.array_elements[i].price;
                    founditem = true;
                }
            }
            if(founditem == false){
                this.array_elements.push(elemnt);
                var last =  this.array_elements.length - 1;
                //this.array_elements[last].tottal = this.array_elements[last].price;
                this.tottal = this.tottal + this.array_elements[last].price;
            }
        }
    }

    return shopData;
  });
