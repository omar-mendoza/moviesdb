 'use strict';

/**
 * @ngdoc function
 * @name moviesdbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moviesdbApp
 */
angular.module('moviesdbApp')
  .controller('MainCtrl', function ($scope, $http, moviesService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.title = 'MoviesDB';
    $scope.movies = null;
    var cont = 0;

    moviesService.load().then(function (data) {
      $scope.movies = data.data;
      cont = $scope.movies.length;
    });

  // Guardará la variable newMovie
  $scope.save = function () {
    cont = $scope.movies.length;
    cont++;
    var movie = {
      id: cont,
      title: $scope.newMovie.title,
      image: $scope.newMovie.image,
      description: $scope.newMovie.description
    };
    console.log(JSON.stringify(movie));
    $scope.movies.push(movie);
    $scope.newMovie = null;
  };
});
