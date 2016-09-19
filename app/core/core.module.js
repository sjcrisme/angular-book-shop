'use strict';

var app = angular.module('core', ['ngResource']);

app.factory('AllBooks', ['$resource',
    function($resource) {
      return $resource('core/:books.json', {}, {
        query: {
          method: 'GET',
          params: {books: 'books'},
          isArray: true
        }
      });
    }
  ]);