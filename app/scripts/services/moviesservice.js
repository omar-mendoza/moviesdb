'use strict';

/**
 * @ngdoc service
 * @name moviesdbApp.moviesService
 * @description
 * # moviesService
 * Factory in the moviesdbApp.
 */
angular.module('moviesdbApp')
  .factory('moviesService', function ($http, $routeParams, $q) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },

      load: function() {
        var defer = $q.defer();
        $http.get('/movies.json').then(function (data){
          defer.resolve(data);
        });
        return defer.promise;
      },

      find: function () {
        var defer = $q.defer();
        var smovie;
        $http.get('/movies.json').then(function (data) {
          var movies = data.data;
          var id = parseInt($routeParams.id);
          for(var i = 0; i < movies.length; i++){
            if(movies[i].id === id) {
              smovie = movies[i];
              defer.resolve(smovie);
            }
          }
        });
        return defer.promise;
      }
    };
  });
