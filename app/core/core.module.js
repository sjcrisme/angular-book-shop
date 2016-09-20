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