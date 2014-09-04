'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
  .controller('ArticleCtrl', function ($scope, $http,  $location, $timeout,  baseURL, $routeParams) {
        var id = $routeParams.id;
        var URL = baseURL+'post/ZM/'+id;

        $http.get(URL).success(function(data){
            $scope.post =data;

        });

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
