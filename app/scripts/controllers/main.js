 'use strict';

/**
 * @ngdoc function
 * @name moviesdbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moviesdbApp
 */
angular.module('moviesdbApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.title = 'MoviesDB';
    var cont = 3;
    $scope.movies = [{
      id: 1,
      title: 'The Matrix',
      image:'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg',
      description: 'The Matrix es una película de ciencia ficción escrita y dirigida por Lana y Lilly Wachowski y protagonizada por Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss y Hugo Weaving. Estrenada en los Estados Unidos el 31 de marzo de 1999.'
    },
    {
      id: 2,
      title: 'Sphere',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Spheremovieposter.jpg/220px-Spheremovieposter.jpg',
      description: 'Esfera es una película estadounidense de 1998, dirigida por Barry Levinson. Protagonizada por Dustin Hoffman, Sharon Stone, Peter Coyote y Samuel L. Jackson en los papeles principales. Basada en la novela homónima de 1987, de Michael Crichton.'
    },
    {
      id: 3,
      title: 'Contact',
      image: 'https://upload.wikimedia.org/wikipedia/en/7/75/Contact_ver2.jpg',
      description: 'Contact es una película estadounidense de 1997 de ciencia ficción y drama dirigida por Robert Zemeckis. Es una adaptación cinematográfica de la novela del mismo nombre escrita por Carl Sagan en 1985'
    }
  ];

  // Guardará la variable newMovie
  $scope.save = function () {
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
