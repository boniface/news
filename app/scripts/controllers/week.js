'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:WeekCtrl
 * @description
 * # WeekCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
  .controller('WeekCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
