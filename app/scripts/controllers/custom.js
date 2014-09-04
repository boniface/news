'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:CustomCtrl
 * @description
 * # CustomCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
  .controller('CustomCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
