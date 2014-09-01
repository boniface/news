'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
  .controller('MainCtrl', function ($scope,$http,baseURL,$resource) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        $scope.listPosts = function(){
            var url = baseURL+'posts/'+'ZM';
            $http.get(url).success(function(data){
                $scope.posts = data;
            });
        };
        $scope.listPosts();

  });
