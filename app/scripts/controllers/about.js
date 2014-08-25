'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
