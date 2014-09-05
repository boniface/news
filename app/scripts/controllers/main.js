'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
    .controller('MainCtrl', function ($scope, $http, baseURL,ZONE) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.listPosts = function () {
            var url = baseURL + 'posts/' +ZONE;
            $http.get(url).success(function (data) {

                $scope.posts = data;
                $scope.maxSize = 10;
                $scope.totalPosts =  $scope.posts.length;
                $scope.currentPage = 1;

                $scope.paginate = function(value) {
                    var begin, end, index;
                    begin = ($scope.currentPage - 1) * $scope.maxSize;
                    end = begin + $scope.maxSize;
                    index = $scope.posts.indexOf(value);
                    return (begin <= index && index < end);
                };
            });
        };

        $scope.listPosts();

    });
