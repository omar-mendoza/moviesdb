'use strict';

/**
 * @ngdoc overview
 * @name moviesdbApp
 * @description
 * # moviesdbApp
 *
 * Main module of the application.
 */
angular
  .module('moviesdbApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    // Con locationProvider
    // se puede modificar el hashPrefix de la url
    // en index.html
    // <base href="/"></base>

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl',
        controllerAs: 'movie'
      })
      .otherwise({
         redirectTo: '/'
      });
  });
