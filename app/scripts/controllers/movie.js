'use strict';

/**
 * @ngdoc function
 * @name moviesdbApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the moviesdbApp
 */
angular.module('moviesdbApp')
  .controller('MovieCtrl', function ($scope, $routeParams, $http, moviesService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    moviesService.find().then(function (data) {
      $scope.smovie = data;
    });

});
