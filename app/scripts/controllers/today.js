'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:TodayCtrl
 * @description
 * # TodayCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
  .controller('TodayCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
